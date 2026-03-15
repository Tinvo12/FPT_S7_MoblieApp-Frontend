const bookingService = require('../services/bookingService');

exports.createBooking = async (req, res) => {
    try {
        const newBooking = await bookingService.createBooking(req.body);
        res.status(201).json({ status: 'success', data: { booking: newBooking } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getBookingDetails = async (req, res) => {
    try {
        const booking = await bookingService.getBookingById(req.params.id);
        res.status(200).json({ status: 'success', data: { booking } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};

exports.updateBookingStatus = async (req, res) => {
    try {
        const booking = await bookingService.updateBookingStatus(req.params.id, req.body);
        res.status(200).json({ status: 'success', data: { booking } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};

exports.getUserBookings = async (req, res) => {
    try {
        const { userId, role } = req.query; // in real app get from req.user
        const bookings = await bookingService.findUserBookings(userId, role);
        res.status(200).json({ status: 'success', results: bookings.length, data: { bookings } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
