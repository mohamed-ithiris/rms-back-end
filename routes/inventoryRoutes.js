// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: API endpoints for managing inventory items
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the inventory item
 *         description:
 *           type: string
 *           description: Description of the inventory item
 *         category:
 *           type: string
 *           description: Category of the inventory item
 *         quantity:
 *           type: number
 *           description: Current quantity of the inventory item
 *         unit:
 *           type: string
 *           description: Unit of measurement for the inventory item
 *         price:
 *           type: number
 *           description: Price of the inventory item
 *         supplier:
 *           type: string
 *           description: Supplier of the inventory item
 *         reorderThreshold:
 *           type: number
 *           description: Threshold quantity for reordering the inventory item
 *         expiryDate:
 *           type: string
 *           format: date
 *           description: Expiry date of the inventory item
 *         storageLocation:
 *           type: string
 *           description: Storage location of the inventory item
 *         sku:
 *           type: string
 *           description: Stock Keeping Unit (SKU) of the inventory item
 *         batchNumber:
 *           type: string
 *           description: Batch number of the inventory item
 *         lastUpdated:
 *           type: string
 *           format: date-time
 *           description: Date and time when the inventory item was last updated
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           description: Ingredients used in the inventory item
 *         allergens:
 *           type: array
 *           items:
 *             type: string
 *           description: Allergens present in the inventory item
 *         nutritionalInformation:
 *           type: object
 *           properties:
 *             calories:
 *               type: number
 *               description: Calories per serving
 *             fat:
 *               type: number
 *               description: Fat content per serving
 *             carbohydrates:
 *               type: number
 *               description: Carbohydrates content per serving
 *             protein:
 *               type: number
 *               description: Protein content per serving
 *           description: Nutritional information per serving
 *         status:
 *           type: string
 *           enum: [active, discontinued]
 *           default: active
 *           description: Status of the inventory item
 */

/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Get all inventory items
 *     description: Retrieve a list of all inventory items
 *     tags: [Inventory]
 *     responses:
 *       '200':
 *         description: A list of inventory items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventory'
 */

/**
 * @swagger
 * /inventory:
 *   post:
 *     summary: Create a new inventory item
 *     description: Create a new inventory item with the provided details
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       '201':
 *         description: Successfully created a new inventory item
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /inventory/{id}:
 *   get:
 *     summary: Get a specific inventory item by ID
 *     description: Retrieve the details of a specific inventory item by providing the inventory item ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the inventory item to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested inventory item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       '404':
 *         description: Inventory item not found with the provided ID
 */

/**
 * @swagger
 * /inventory/{id}:
 *   put:
 *     summary: Update an existing inventory item
 *     description: Update the details of an existing inventory item by providing the inventory item ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the inventory item to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       '200':
 *         description: Successfully updated the inventory item details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Inventory item not found with the provided ID
 */

/**
 * @swagger
 * /inventory/{id}:
 *   delete:
 *     summary: Delete an existing inventory item
 *     description: Delete an existing inventory item by providing the inventory item ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the inventory item to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the inventory item
 *       '404':
 *         description: Inventory item not found with the provided ID
 */

// Get all inventory items
router.get('/', inventoryController.getAllInventory);

// Create a new inventory item
router.post('/', inventoryController.createInventoryItem);

// Get a specific inventory item by ID
router.get('/:id', inventoryController.getInventoryItemById);

// Update an existing inventory item
router.put('/:id', inventoryController.updateInventoryItem);

// Delete an existing inventory item
router.delete('/:id', inventoryController.deleteInventoryItem);

module.exports = router;
