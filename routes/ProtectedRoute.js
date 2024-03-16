// Protected Routes
const express = require('express');
const router = express.Router();
const authMiddleware = require('../authMiddleware');

// Apply JWT middleware to protect the employees route
// Employees Module
router.get('/employees', authMiddleware.verifyToken, (req, res, next) => {
    next();
});
// router.put('/employees/:id', authMiddleware.verifyToken, (req, res, next) => {
//     next();
// });
// router.delete('/employees/:id', authMiddleware.verifyToken, (req, res, next) => {
//     next();
// });


// Apply JWT middleware to protect the orders route
router.get('/orders', authMiddleware.verifyToken, (req, res) => {
    // console.log(req, "req")
    res.json({ message: 'Protected route accessed successfully', employeeId: req.employeeId });
});

module.exports = router;
