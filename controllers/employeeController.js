const Employee = require('../models/Employee');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Hash the password
        const { name, role, shifts, contactInfo, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new employee instance
        const newEmployee = new Employee({ name, role, shifts, contactInfo, password: hashedPassword });

        // Save the employee to the database
        await newEmployee.save();

        // Send success response
        res.status(201).json(newEmployee);
    } catch (err) {
        // Handle database or server errors
        console.error('Error creating employee:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get a specific employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing employee
exports.updateEmployee = async (req, res) => {
    const { name, role, shifts, contactInfo, password } = req.body;
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,
            { name, role, shifts, contactInfo, password }, { new: true });
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an existing employee
exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
