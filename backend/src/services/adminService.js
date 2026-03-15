const User = require('../models/User');
const Booking = require('../models/Booking');

exports.findAllUsers = async () => {
    return await User.find();
};

exports.updateUserStatus = async (id, statusData) => {
    const { isActive, isVerified } = statusData;
    const user = await User.findByIdAndUpdate(id, { isActive, isVerified }, { new: true });
    if (!user) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }
    return user;
};

exports.findAllBookings = async () => {
    return await Booking.find().populate('mc').populate('client');
};
