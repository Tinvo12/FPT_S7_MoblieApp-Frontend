import apiClient from './client';

export const createBooking = async (bookingData) => {
    try {
        const response = await apiClient.post('/bookings', bookingData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMyBookings = async (userId, role) => {
    try {
        // API: /api/v1/bookings/user?userId=...&role=...
        const response = await apiClient.get(`/bookings/user?userId=${userId}&role=${role}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateBookingStatus = async (bookingId, statusData) => {
    try {
        const response = await apiClient.patch(`/bookings/${bookingId}`, statusData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
