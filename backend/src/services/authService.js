const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret-fallback', {
        expiresIn: process.env.JWT_EXPIRES_IN || '30d',
    });
};

exports.registerUser = async (userData) => {
    const newUser = await User.create(userData);
    const token = signToken(newUser._id);
    newUser.password = undefined;
    return { user: newUser, token };
};

exports.loginUser = async (email, password) => {
    if (!email || !password) {
        const error = new Error('Please provide email and password');
        error.statusCode = 400;
        throw error;
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || user.password !== password) {
        const error = new Error('Incorrect email or password');
        error.statusCode = 401;
        throw error;
    }

    const token = signToken(user._id);
    user.password = undefined;
    return { user, token };
};
