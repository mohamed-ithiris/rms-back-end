// routes/promotionRoutes.js
const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

/**
 * @swagger
 * tags:
 *   name: Promotions
 *   description: API endpoints for managing promotions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Promotion:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the promotion
 *         description:
 *           type: string
 *           description: The description of the promotion
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: The start date of the promotion
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: The end date of the promotion
 *         discountType:
 *           type: string
 *           enum: [percentage, fixedAmount]
 *           description: The type of discount (percentage or fixed amount)
 *         discountValue:
 *           type: number
 *           description: The value of the discount
 *         isActive:
 *           type: boolean
 *           description: Indicates whether the promotion is active
 */

/**
 * @swagger
 * /promotions:
 *   get:
 *     summary: Get all promotions
 *     description: Retrieve a list of all promotions
 *     tags: [Promotions]
 *     responses:
 *       '200':
 *         description: A list of promotions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Promotion'
 */

/**
 * @swagger
 * /promotions:
 *   post:
 *     summary: Create a new promotion
 *     description: Create a new promotion with the provided details
 *     tags: [Promotions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       '201':
 *         description: Successfully created a new promotion
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /promotions/{id}:
 *   get:
 *     summary: Get a specific promotion by ID
 *     description: Retrieve the details of a specific promotion by providing the promotion ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the promotion to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested promotion
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 *       '404':
 *         description: Promotion not found with the provided ID
 */

/**
 * @swagger
 * /promotions/{id}:
 *   put:
 *     summary: Update an existing promotion
 *     description: Update the details of an existing promotion by providing the promotion ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the promotion to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       '200':
 *         description: Successfully updated the promotion details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Promotion not found with the provided ID
 */

/**
 * @swagger
 * /promotions/{id}:
 *   delete:
 *     summary: Delete an existing promotion
 *     description: Delete an existing promotion by providing the promotion ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the promotion to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the promotion
 *       '404':
 *         description: Promotion not found with the provided ID
 */

// Get all promotions
router.get('/', promotionController.getAllPromotions);

// Create a new promotion
router.post('/', promotionController.createPromotion);

// Get a specific promotion by ID
router.get('/:id', promotionController.getPromotionById);

// Update an existing promotion
router.put('/:id', promotionController.updatePromotion);

// Delete an existing promotion
router.delete('/:id', promotionController.deletePromotion);

module.exports = router;
