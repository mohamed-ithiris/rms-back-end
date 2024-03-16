// models/Promotion.js
const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    discountType: { type: String, enum: ['percentage', 'fixedAmount'], required: true },
    discountValue: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Promotion', promotionSchema);
