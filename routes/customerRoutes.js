// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: API endpoints for managing customer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the customer
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the customer
 *         phone:
 *           type: string
 *           description: The phone number of the customer
 *         address:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *               description: Street address
 *             city:
 *               type: string
 *               description: City
 *             state:
 *               type: string
 *               description: State
 *             postalCode:
 *               type: string
 *               description: Postal code
 *           description: The address of the customer
 *         birthday:
 *           type: string
 *           format: date
 *           description: The birthday of the customer
 *         gender:
 *           type: string
 *           enum: [Male, Female, Other]
 *           description: The gender of the customer
 *         loyaltyPoints:
 *           type: number
 *           description: The loyalty points of the customer
 */

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     description: Retrieve a list of all customers
 *     tags: [Customer]
 *     responses:
 *       '200':
 *         description: A list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     description: Create a new customer with the provided details
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       '201':
 *         description: Successfully created a new customer
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get a specific customer by ID
 *     description: Retrieve the details of a customer by providing the customer ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested customer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       '404':
 *         description: Customer not found with the provided ID
 */

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update an existing customer
 *     description: Update the details of an existing customer by providing the customer ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       '200':
 *         description: Successfully updated the customer details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Customer not found with the provided ID
 */

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete an existing customer
 *     description: Delete a customer by providing the customer ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the customer
 *       '404':
 *         description: Customer not found with the provided ID
 */


// Get all customers
router.get('/', customerController.getAllCustomers);

// Create a new customer
router.post('/', customerController.createCustomer);

// Get a specific customer by ID
router.get('/:id', customerController.getCustomerById);

// Update an existing customer
router.put('/:id', customerController.updateCustomer);

// Delete an existing customer
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
