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
            userId: employee._id,
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
        // Update the employee document with the refresh token
        await Employee.findByIdAndUpdate(
            employee._id,
            { refreshToken: refreshToken },
            { new: true }
        );

        res.status(200).json({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        // res.status(500).json({ message: error.message });
    }
};

exports.refreshToken = async (req, res) => {
    const refreshToken = req?.cookies?.refreshToken || req?.body?.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }
        const user = {
            userId: decoded._id,
            name: decoded.name,
            role: decoded.role
        }
        const newAccessToken = this.generateAccessToken(user);
        res.json({ accessToken: newAccessToken });
    });
}

exports.logout = async (req, res) => {
    try {
        // Clear the refresh token from the HTTP-only cookie
        res.clearCookie('refreshToken', { httpOnly: true, secure: true });

        // Optionally, clear the refresh token from the database
        // Example: Update the employee document to remove the refresh token
        const userId = req.userId; // Assuming you have the user's ID available in req.user
        await Employee.findByIdAndUpdate(userId, { refreshToken: null });

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
