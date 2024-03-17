require('dotenv').config();
const express = require('express');
const app = express();
require('./db'); // Import the db module
const swaggerSetup = require('./swagger');

const protectedRoute = require('./routes/ProtectedRoute');
const { authorize } = require('./middleware/authorizeMiddleware');

const orderRoutes = require('./routes/orderRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const customerRoutes = require('./routes/customerRoutes');
const promotionRoutes = require('./routes/promotionRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const authRoutes = require('./routes/authRoutes');

// Middleware to enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// Middleware
app.use(express.json());
app.use('/', protectedRoute);
app.use('/employees', authorize(['admin', 'manager', 'server', 'kitchen staff', 'delivery captain']));

// Routes
app.use('/orders', orderRoutes);
app.use('/employees', employeeRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/customers', customerRoutes);
app.use('/promotions', promotionRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/menuItems', menuItemRoutes);
app.use('/auth', authRoutes);

// Initialize Swagger setup
swaggerSetup(app);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
