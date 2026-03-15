const Booking = require('../models/Booking');

exports.createBooking = async (bookingData) => {
    return await Booking.create(bookingData);
};

exports.getBookingById = async (id) => {
    const booking = await Booking.findById(id)
        .populate('mc', 'name avatar')
        .populate('client', 'name avatar');

    if (!booking) {
        const error = new Error('Booking not found');
        error.statusCode = 404;
        throw error;
    }

    return booking;
};

exports.updateBookingStatus = async (id, statusData) => {
    const { status, paymentStatus } = statusData;

    const booking = await Booking.findByIdAndUpdate(
        id,
        { status, paymentStatus },
        { new: true, runValidators: true }
    );

    if (!booking) {
        const error = new Error('Booking not found');
        error.statusCode = 404;
        throw error;
    }

    return booking;
};

exports.findUserBookings = async (userId, role) => {
    let query = {};
    if (role === 'mc') query.mc = userId;
    else if (role === 'client') query.client = userId;

    return await Booking.find(query)
        .populate('mc', 'name')
        .populate('client', 'name');
};
