// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    items: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    orderStatus: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
    orderType: { type: String, enum: ['dine-in', 'takeout', 'delivery'], required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
