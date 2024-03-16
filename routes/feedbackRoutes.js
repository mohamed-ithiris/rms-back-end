// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

/**
 * @swagger
 * tags:
 *   name: Feedback
 *   description: API endpoints for managing feedback
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Feedback:
 *       type: object
 *       properties:
 *         customer:
 *           type: string
 *           description: The ID of the customer who provided the feedback
 *         rating:
 *           type: number
 *           description: The rating given by the customer (from 1 to 5)
 *         comment:
 *           type: string
 *           description: The comment provided by the customer (optional)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the feedback was created
 *         order:
 *           type: string
 *           description: The ID of the order associated with the feedback
 */

/**
 * @swagger
 * /feedback:
 *   get:
 *     summary: Get all feedback
 *     description: Retrieve a list of all feedback
 *     tags: [Feedback]
 *     responses:
 *       '200':
 *         description: A list of feedback
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Feedback'
 */

/**
 * @swagger
 * /feedback:
 *   post:
 *     summary: Create a new feedback
 *     description: Create a new feedback with the provided details
 *     tags: [Feedback]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       '201':
 *         description: Successfully created a new feedback
 *       '400':
 *         description: Bad request. Missing or invalid request body
 */

/**
 * @swagger
 * /feedback/{id}:
 *   get:
 *     summary: Get a specific feedback by ID
 *     description: Retrieve the details of a specific feedback by providing the feedback ID
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the feedback to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the requested feedback
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Feedback'
 *       '404':
 *         description: Feedback not found with the provided ID
 */

/**
 * @swagger
 * /feedback/{id}:
 *   put:
 *     summary: Update an existing feedback
 *     description: Update the details of an existing feedback by providing the feedback ID
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the feedback to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       '200':
 *         description: Successfully updated the feedback details
 *       '400':
 *         description: Bad request. Missing or invalid request body
 *       '404':
 *         description: Feedback not found with the provided ID
 */

/**
 * @swagger
 * /feedback/{id}:
 *   delete:
 *     summary: Delete an existing feedback
 *     description: Delete an existing feedback by providing the feedback ID
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the feedback to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Successfully deleted the feedback
 *       '404':
 *         description: Feedback not found with the provided ID
 */

// Get all feedback
router.get('/', feedbackController.getAllFeedback);

// Create new feedback
router.post('/', feedbackController.createFeedback);

// Get feedback by ID
router.get('/:id', feedbackController.getFeedbackById);

// Update feedback
router.put('/:id', feedbackController.updateFeedback);

// Delete feedback
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
