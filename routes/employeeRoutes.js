const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { body } = require('express-validator');

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: API endpoints for managing employees
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the employee
 *         role:
 *           type: string
 *           enum: [admin, manager, server, kitchen staff, delivery captain]
 *           description: The role of the employee
 *         shifts:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               day:
 *                 type: string
 *                 enum: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
 *                 description: The day of the week
 *               startTime:
 *                 type: string
 *                 description: The start time of the shift
 *               endTime:
 *                 type: string
 *                 description: The end time of the shift
 *           description: The shifts assigned to the employee
 *         contactInfo:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *               description: The email address of the employee
 *             phone:
 *               type: string
 *               description: The phone number of the employee
 *           description: The contact information of the employee
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the employee
 *         refreshToken:
 *           type: string
 *           description: The refresh token of the employee
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     description: Retrieve a list of all employees
 *     tags: [Employees]
 *     responses:
 *       '200':
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     description: Create a new employee with the provided details
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       '201':
 *         description: Successfully created a new employee
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get a specific employee by ID
 *     description: Retrieve the details of a specific employee by providing the employee ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       '404':
 *         description: Employee not found with the provided ID
 */

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     description: Update the details of an existing employee by providing the employee ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       '200':
 *         description: Successfully updated the employee details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Employee not found with the provided ID
 */

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete an existing employee
 *     description: Delete an existing employee by providing the employee ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the employee
 *       '404':
 *         description: Employee not found with the provided ID
 */
// Validation middleware to validate request body
const validateCreateEmployee = [
    // Validate name
    body('name').notEmpty().withMessage('Name is required'),

    // Validate role
    body('role').notEmpty().withMessage('Role is required'),

    // Validate shifts
    body('shifts').isArray().withMessage('Shifts must be an array'),

    // Validate contactInfo
    body('contactInfo').isObject().withMessage('Contact info must be an object'),

    // Validate email
    body('contactInfo.email').isEmail().withMessage('Invalid email'),

    // Validate phone
    body('contactInfo.phone').isMobilePhone().withMessage('Invalid phone number'),

    // Validate password
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Create a new employee
router.post('/',validateCreateEmployee, employeeController.createEmployee);

// Get a specific employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Update an existing employee
router.put('/:id', employeeController.updateEmployee);

// Delete an existing employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
