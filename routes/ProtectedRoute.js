// Protected Routes
const express = require('express');
const router = express.Router();
const authMiddleware = require('../authMiddleware');

// Apply JWT middleware to protect the employees route
router.get('/employees', authMiddleware.verifyToken, (req, res) => {
    res.json({
        message: 'Protected route accessed successfully',
        employeeId: req.employeeId,
        name: req.name,
        role: req.role
    });
});

// Apply JWT middleware to protect the orders route
router.get('/orders', authMiddleware.verifyToken, (req, res) => {
    console.log(req, "req")
    res.json({ message: 'Protected route accessed successfully', employeeId: req.employeeId });
});

module.exports = router;
