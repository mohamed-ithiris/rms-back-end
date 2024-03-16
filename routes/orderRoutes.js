// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing orders
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         customerName:
 *           type: string
 *           description: The name of the customer who placed the order
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the menu item
 *               quantity:
 *                 type: number
 *                 description: The quantity of the menu item ordered
 *               price:
 *                 type: number
 *                 description: The price of the menu item
 *           description: The list of items ordered
 *         orderStatus:
 *           type: string
 *           enum: [pending, confirmed, completed]
 *           default: pending
 *           description: The status of the order
 *         orderType:
 *           type: string
 *           enum: [dine-in, takeout, delivery]
 *           description: The type of order (e.g., dine-in, takeout, delivery)
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the order was placed
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Retrieve a list of all orders
 *     tags: [Orders]
 *     responses:
 *       '200':
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order with the provided details
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '201':
 *         description: Successfully created a new order
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get a specific order by ID
 *     description: Retrieve the details of a specific order by providing the order ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       '404':
 *         description: Order not found with the provided ID
 */

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an existing order
 *     description: Update the details of an existing order by providing the order ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '200':
 *         description: Successfully updated the order details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Order not found with the provided ID
 */

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an existing order
 *     description: Delete an existing order by providing the order ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the order
 *       '404':
 *         description: Order not found with the provided ID
 */

// GET all orders
router.get('/', orderController.getAllOrders);

// POST create a new order
router.post('/', orderController.createOrder);

// GET a specific order by ID
router.get('/:id', orderController.getOrderById);

// PUT update an existing order
router.put('/:id', orderController.updateOrder);

// DELETE delete an existing order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
