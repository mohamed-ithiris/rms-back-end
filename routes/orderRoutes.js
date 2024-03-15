// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET all orders
router.get('/', orderController.getAllOrders);

// POST create a new order
router.post('/', orderController.createOrder);

// GET a specific order by ID
router.get('/:id', orderController.getOrderById);

// PUT update an existing order
router.put('/:id', orderController.updateOrder);

// DELETE delete an existing order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
