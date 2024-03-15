// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Get all customers
router.get('/', customerController.getAllCustomers);

// Create a new customer
router.post('/', customerController.createCustomer);

// Get a specific customer by ID
router.get('/:id', customerController.getCustomerById);

// Update an existing customer
router.put('/:id', customerController.updateCustomer);

// Delete an existing customer
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
