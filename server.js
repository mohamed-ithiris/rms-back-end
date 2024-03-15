// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const orderRoutes = require('./routes/orderRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/orders', orderRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
