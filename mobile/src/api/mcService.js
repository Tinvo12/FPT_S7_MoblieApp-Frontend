import apiClient from './client';

export const getMCProfile = async (profileId) => {
    try {
        const response = await apiClient.get(`/mcs/${profileId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateMCProfile = async (profileData) => {
    try {
        // Assuming the backend has a PUT or PATCH /mcs/profile endpoint or similar
        // Based on common patterns in the project
        const response = await apiClient.patch('/mcs/profile', profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMyMCProfile = async () => {
    try {
        const response = await apiClient.get('/mcs/my-profile');
        return response.data;
    } catch (error) {
        throw error;
    }
};
