const chatService = require('../services/chatService');

exports.getHistory = async (req, res) => {
    try {
        const history = await chatService.getMessageHistory(req.params.bookingId);
        res.status(200).json({ status: 'success', data: { history } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.markRead = async (req, res) => {
    try {
        const message = await chatService.markAsRead(req.params.messageId);
        res.status(200).json({ status: 'success', data: { message } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
