const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const { user, token } = await authService.registerUser(req.body);

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.loginUser(email, password);

        res.status(200).json({
            status: 'success',
            token,
            data: {
                user,
            },
        });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};
