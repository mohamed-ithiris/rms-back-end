// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { 
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String }
    },
    birthday: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    loyaltyPoints: { type: Number, default: 0 },
    // Add other fields as needed
});

module.exports = mongoose.model('Customer', customerSchema);
