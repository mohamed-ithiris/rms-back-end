// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Get all inventory items
router.get('/', inventoryController.getAllInventory);

// Create a new inventory item
router.post('/', inventoryController.createInventoryItem);

// Get a specific inventory item by ID
router.get('/:id', inventoryController.getInventoryItemById);

// Update an existing inventory item
router.put('/:id', inventoryController.updateInventoryItem);

// Delete an existing inventory item
router.delete('/:id', inventoryController.deleteInventoryItem);

module.exports = router;
