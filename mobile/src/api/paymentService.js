import apiClient from './client';

export const createPayment = async (paymentData) => {
    try {
        const response = await apiClient.post('/payments', paymentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPaymentHistory = async (userId) => {
    try {
        const response = await apiClient.get(`/payments/history/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePaymentStatus = async (transactionId, status) => {
    try {
        const response = await apiClient.patch(`/payments/${transactionId}`, { status });
        return response.data;
    } catch (error) {
        throw error;
    }
};
