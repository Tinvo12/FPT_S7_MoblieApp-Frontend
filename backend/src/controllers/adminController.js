const adminService = require('../services/adminService');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await adminService.findAllUsers();
        res.status(200).json({ status: 'success', results: users.length, data: { users } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.updateUserStatus = async (req, res) => {
    try {
        const user = await adminService.updateUserStatus(req.params.id, req.body);
        res.status(200).json({ status: 'success', data: { user } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await adminService.findAllBookings();
        res.status(200).json({ status: 'success', results: bookings.length, data: { bookings } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
