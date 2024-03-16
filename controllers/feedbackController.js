// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

// Get all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new feedback
exports.createFeedback = async (req, res) => {
    const { customer, rating, comment, order } = req.body;
    try {
        const newFeedback = new Feedback({ customer, rating, comment, order });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get feedback by ID
exports.getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update feedback
exports.updateFeedback = async (req, res) => {
    const { rating, comment, order } = req.body;
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id,
            { rating, comment, order },
            { new: true }
        );
        res.json(updatedFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete feedback
exports.deleteFeedback = async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.json({ message: 'Feedback deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
