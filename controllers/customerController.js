// controllers/customerController.js
const Customer = require('../models/Customer');

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
    const { name, email, phone, address, birthday, gender } = req.body;
    try {
        const newCustomer = new Customer({ name, email, phone, address, birthday, gender });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing customer
exports.updateCustomer = async (req, res) => {
    const { name, email, phone, address, birthday, gender } = req.body;
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id,
            { name, email, phone, address, birthday, gender },
            { new: true }
        );
        res.json(updatedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an existing customer
exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
