// routes/menuItemRoutes.js
const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

/**
 * @swagger
 * tags:
 *   name: Menu Items
 *   description: API endpoints for managing menu items
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MenuItem:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the menu item
 *         description:
 *           type: string
 *           description: Description of the menu item
 *         price:
 *           type: number
 *           description: Price of the menu item
 *         category:
 *           type: string
 *           description: Category of the menu item
 *         isAvailable:
 *           type: boolean
 *           default: true
 *           description: Availability status of the menu item
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           description: Ingredients used in the menu item
 *         nutritionalInfo:
 *           type: object
 *           properties:
 *             calories:
 *               type: number
 *               description: Calories per serving
 *             fat:
 *               type: number
 *               description: Fat content per serving
 *             protein:
 *               type: number
 *               description: Protein content per serving
 *             carbohydrates:
 *               type: number
 *               description: Carbohydrates content per serving
 *           description: Nutritional information per serving
 *         imageUrl:
 *           type: string
 *           description: URL of the image for the menu item
 */

/**
 * @swagger
 * /menuItems:
 *   get:
 *     summary: Get all menu items
 *     description: Retrieve a list of all menu items
 *     tags: [Menu Items]
 *     responses:
 *       '200':
 *         description: A list of menu items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MenuItem'
 */

/**
 * @swagger
 * /menuItems:
 *   post:
 *     summary: Create a new menu item
 *     description: Create a new menu item with the provided details
 *     tags: [Menu Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuItem'
 *     responses:
 *       '201':
 *         description: Successfully created a new menu item
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /menuItems/{id}:
 *   get:
 *     summary: Get a specific menu item by ID
 *     description: Retrieve the details of a specific menu item by providing the menu item ID
 *     tags: [Menu Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the menu item to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested menu item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuItem'
 *       '404':
 *         description: Menu item not found with the provided ID
 */

/**
 * @swagger
 * /menuItems/{id}:
 *   put:
 *     summary: Update an existing menu item
 *     description: Update the details of an existing menu item by providing the menu item ID
 *     tags: [Menu Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the menu item to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuItem'
 *     responses:
 *       '200':
 *         description: Successfully updated the menu item details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Menu item not found with the provided ID
 */

/**
 * @swagger
 * /menuItems/{id}:
 *   delete:
 *     summary: Delete an existing menu item
 *     description: Delete an existing menu item by providing the menu item ID
 *     tags: [Menu Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the menu item to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the menu item
 *       '404':
 *         description: Menu item not found with the provided ID
 */

// Get all menu items
router.get('/', menuItemController.getAllMenuItems);

// Create a new menu item
router.post('/', menuItemController.createMenuItem);

// Get a specific menu item by ID
router.get('/:id', menuItemController.getMenuItemById);

// Update an existing menu item
router.put('/:id', menuItemController.updateMenuItem);

// Delete an existing menu item
router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
