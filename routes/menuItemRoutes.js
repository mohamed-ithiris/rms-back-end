// routes/menuItemRoutes.js
const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

// Get all menu items
router.get('/', menuItemController.getAllMenuItems);

// Create a new menu item
router.post('/', menuItemController.createMenuItem);

// Get a specific menu item by ID
router.get('/:id', menuItemController.getMenuItemById);

// Update an existing menu item
router.put('/:id', menuItemController.updateMenuItem);

// Delete an existing menu item
router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
