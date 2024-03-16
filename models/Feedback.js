// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, // Reference to the order associated with the feedback
});

module.exports = mongoose.model('Feedback', feedbackSchema);
