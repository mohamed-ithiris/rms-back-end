// controllers/inventoryController.js
const Inventory = require('../models/Inventory');

// Get all inventory items
exports.getAllInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new inventory item
exports.createInventoryItem = async (req, res) => {
    const { name, description, category, quantity, unit, price, supplier, reorderThreshold, expiryDate, storageLocation, sku, batchNumber, ingredients, allergens, nutritionalInformation, status } = req.body;
    try {
        const newItem = new Inventory({ name, description, category, quantity, unit, price, supplier, reorderThreshold, expiryDate, storageLocation, sku, batchNumber, ingredients, allergens, nutritionalInformation, status });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific inventory item by ID
exports.getInventoryItemById = async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing inventory item
exports.updateInventoryItem = async (req, res) => {
    const { name, description, category, quantity, unit, price, supplier, reorderThreshold, expiryDate, storageLocation, sku, batchNumber, ingredients, allergens, nutritionalInformation, status } = req.body;
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(req.params.id,
            { name, description, category, quantity, unit, price, supplier, reorderThreshold, expiryDate, storageLocation, sku, batchNumber, ingredients, allergens, nutritionalInformation, status },
            { new: true }
        );
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an existing inventory item
exports.deleteInventoryItem = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Inventory item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
