const Message = require('../models/Message');

exports.saveMessage = async (messageData) => {
    return await Message.create(messageData);
};

exports.getMessageHistory = async (bookingId) => {
    return await Message.find({ booking: bookingId })
        .sort({ createdAt: 1 })
        .populate('sender', 'name avatar')
        .populate('receiver', 'name avatar');
};

exports.markAsRead = async (messageId) => {
    return await Message.findByIdAndUpdate(messageId, { readStatus: true }, { new: true });
};
