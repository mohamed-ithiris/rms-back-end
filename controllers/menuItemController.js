// controllers/menuItemController.js
const MenuItem = require('../models/MenuItem');

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new menu item
exports.createMenuItem = async (req, res) => {
    const { name, description, price, category, isAvailable, ingredients, nutritionalInfo, imageUrl } = req.body;
    try {
        const newMenuItem = new MenuItem({ name, description, price, category, isAvailable, ingredients, nutritionalInfo, imageUrl });
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        res.json(menuItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing menu item
exports.updateMenuItem = async (req, res) => {
    const { name, description, price, category, isAvailable, ingredients, nutritionalInfo, imageUrl } = req.body;
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id,
            { name, description, price, category, isAvailable, ingredients, nutritionalInfo, imageUrl },
            { new: true }
        );
        res.json(updatedMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an existing menu item
exports.deleteMenuItem = async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
