// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    ingredients: [{ type: String }],
    nutritionalInfo: {
        calories: { type: Number },
        fat: { type: Number },
        protein: { type: Number },
        carbohydrates: { type: Number },
    },
    imageUrl: { type: String },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
