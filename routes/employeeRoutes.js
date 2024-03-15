const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Create a new employee
router.post('/', employeeController.createEmployee);

// Get a specific employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Update an existing employee
router.put('/:id', employeeController.updateEmployee);

// Delete an existing employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
