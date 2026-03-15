const paymentService = require('../services/paymentService');

exports.createPayment = async (req, res) => {
    try {
        const newPayment = await paymentService.createTransaction(req.body);
        res.status(201).json({ status: 'success', data: { transaction: newPayment } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getPaymentHistory = async (req, res) => {
    try {
        const transactions = await paymentService.findUserTransactions(req.params.userId);
        res.status(200).json({ status: 'success', results: transactions.length, data: { transactions } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.updatePaymentStatus = async (req, res) => {
    try {
        const transaction = await paymentService.updateTransactionStatus(req.params.id, req.body.status);
        res.status(200).json({ status: 'success', data: { transaction } });
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({ status: 'fail', message: err.message });
    }
};
