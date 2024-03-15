// controllers/promotionController.js
const Promotion = require('../models/Promotion');

// Get all promotions
exports.getAllPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new promotion
exports.createPromotion = async (req, res) => {
    const { name, description, startDate, endDate, discountType, discountValue, isActive } = req.body;
    try {
        const newPromotion = new Promotion({ name, description, startDate, endDate, discountType, discountValue, isActive });
        await newPromotion.save();
        res.status(201).json(newPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific promotion by ID
exports.getPromotionById = async (req, res) => {
    try {
        const promotion = await Promotion.findById(req.params.id);
        if (!promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }
        res.json(promotion);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing promotion
exports.updatePromotion = async (req, res) => {
    const { name, description, startDate, endDate, discountType, discountValue, isActive } = req.body;
    try {
        const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id,
            { name, description, startDate, endDate, discountType, discountValue, isActive },
            { new: true }
        );
        res.json(updatedPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an existing promotion
exports.deletePromotion = async (req, res) => {
    try {
        await Promotion.findByIdAndDelete(req.params.id);
        res.json({ message: 'Promotion deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
