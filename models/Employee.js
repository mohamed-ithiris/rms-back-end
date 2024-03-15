// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['manager', 'server', 'kitchen staff', 'delivery captain'], required: true },
    shifts: [{
        day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true }
    }],
    contactInfo: {
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);
