// models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    quantity: { type: Number, required: true },
    unit: { type: String },
    price: { type: Number, required: true },
    supplier: { type: String },
    reorderThreshold: { type: Number },
    expiryDate: { type: Date },
    storageLocation: { type: String },
    sku: { type: String },
    batchNumber: { type: String },
    lastUpdated: { type: Date, default: Date.now },
    ingredients: [{ type: String }],
    allergens: [{ type: String }],
    nutritionalInformation: {
        calories: { type: Number },
        fat: { type: Number },
        carbohydrates: { type: Number },
        protein: { type: Number },
        // Add other nutritional fields as needed
    },
    status: { type: String, enum: ['active', 'discontinued'], default: 'active' }
});

module.exports = mongoose.model('Inventory', inventorySchema);
