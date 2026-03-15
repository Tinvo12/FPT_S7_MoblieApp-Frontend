const reviewService = require('../services/reviewService');

exports.createReview = async (req, res) => {
    try {
        const clientId = req.user ? req.user._id : req.body.clientId;
        const review = await reviewService.createReview({ ...req.body, clientId });

        res.status(201).json({ status: 'success', data: { review } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};

exports.getMCReviews = async (req, res) => {
    try {
        const reviews = await reviewService.getMCReviews(req.params.mcId);
        res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await reviewService.updateReview(req.params.id, req.body);
        res.status(200).json({ status: 'success', data: { review: updatedReview } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        await reviewService.deleteReview(req.params.id);
        res.status(204).json({ status: 'success', data: null });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
