require('dotenv').config();
const express = require('express');
const app = express();
require('./db'); // Import the db module
const employeeRoutes = require('./routes/employeeRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/orders', orderRoutes);
app.use('/employees', employeeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
