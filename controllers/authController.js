// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

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
        const user={
            employeeId: employee._id,
            name: employee.name,
            role: employee.role
        }

        // Generate JWT Access Token
        const accessToken = jwt.sign(
            user,
            process.env.ACCESS_TOKEN,
            { expiresIn: '15s' }
        );

        // Generate JWT Refresh Token
        const refreshToken = jwt.sign(
            user,
            process.env.REFRESH_TOKEN
        );
        res.status(200).json({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
