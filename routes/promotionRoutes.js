// routes/promotionRoutes.js
const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

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
