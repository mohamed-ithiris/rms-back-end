// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login user
router.post('/login', authController.login);

router.post('/refresh-token', authController.refreshToken);

module.exports = router;