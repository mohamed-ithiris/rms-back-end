// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

exports.generateAccessToken = (user) => {
    try {
        // Generate JWT Access Token
        const accessToken = jwt.sign(
            user,
            process.env.ACCESS_TOKEN,
            { expiresIn: '10m' }
        );
        return accessToken;
    } catch (error) {
        return error;
    }
};

exports.generateRefreshToken = (user) => {
    try {
        // Generate JWT Refresh Token
        const refreshToken = jwt.sign(
            user,
            process.env.REFRESH_TOKEN,
            { expiresIn: '8h' }
        );
        return refreshToken;
    } catch (error) {
        return error;
    }
};

// Login employee
exports.login = async (req, res) => {
    try {
        // Find the employee by name
        const employee = await Employee.findOne({ name: req.body.name });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(req.body.password, employee.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const user = {
            employeeId: employee._id,
            name: employee.name,
            role: employee.role
        }

        // Generate JWT Access Token
        const accessToken = this.generateAccessToken(user);

        // Generate JWT Refresh Token
        const refreshToken = this.generateRefreshToken(user);

        // Storing refresh token in an HTTP-only cookie
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });

        // Storing refresh token in a database 
        // Storing refresh token in a database (MongoDB example)
        const validUser = await Employee.findById(employee._id);
        validUser.refreshToken = refreshToken;
        await validUser.save();
        // employee.refreshToken = refreshToken;
        // await employee.save();

        res.status(200).json({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.refreshToken = async (req, res) => {
    const refreshToken = req?.body?.refreshToken || req?.cookies?.refreshTokenß;

    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }
        const user = {
            employeeId: decoded._id,
            name: decoded.name,
            role: decoded.role
        }
        const newAccessToken = this.generateAccessToken(user);
        res.json({ accessToken: newAccessToken });
    });
}
