// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
// const orderRoutes = require('./routes/orderRoutes');
// const employeeRoutes = require('./routes/employeeRoutes');

// Middleware
app.use(express.json());

// Routes
// app.use('/orders', orderRoutes);
// app.use('/employees', employeeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
