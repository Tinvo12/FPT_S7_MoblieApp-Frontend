const Transaction = require('../models/Transaction');

exports.createTransaction = async (transactionData) => {
    return await Transaction.create(transactionData);
};

exports.findUserTransactions = async (userId) => {
    return await Transaction.find({ $or: [{ client: userId }, { mc: userId }] });
};

exports.updateTransactionStatus = async (id, status) => {
    const transaction = await Transaction.findByIdAndUpdate(id, { status }, { new: true });
    if (!transaction) {
        const error = new Error('Transaction not found');
        error.statusCode = 404;
        throw error;
    }
    return transaction;
};
