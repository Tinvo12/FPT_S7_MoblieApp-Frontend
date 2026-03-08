import client from './client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email, password) => {
    try {
        // Gọi API đăng nhập từ backend (giả định endpoint là /api/auth/login)
        const response = await client.post('/api/auth/login', { email, password });
        if (response.data.token) {
            await AsyncStorage.setItem('userToken', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    await AsyncStorage.removeItem('userToken');
};
