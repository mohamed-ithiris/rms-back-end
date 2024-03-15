const Employee = require('../models/Employee');

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
    const { name, role, shifts, contactInfo, password } = req.body;
    try {
        const newEmployee = new Employee({ name, role, shifts, contactInfo, password });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
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
