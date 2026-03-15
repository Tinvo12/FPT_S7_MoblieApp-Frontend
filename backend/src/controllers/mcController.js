const mcService = require('../services/mcService');

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user?._id || req.body.userId; // Assuming middleware or payload
        const profile = await mcService.updateMCProfile(userId, req.body);
        res.status(200).json({ status: 'success', data: { profile } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getAllMCs = async (req, res) => {
    try {
        const profiles = await mcService.findAllMCs(req.query);
        res.status(200).json({ status: 'success', results: profiles.length, data: { profiles } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getMCDetails = async (req, res) => {
    try {
        const profile = await mcService.getMCProfileById(req.params.id);
        res.status(200).json({ status: 'success', data: { profile } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};
