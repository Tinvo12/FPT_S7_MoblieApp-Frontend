import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENV } from '../config/env';

const apiClient = axios.create({
    baseURL: ENV.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Thêm token vào header nếu người dùng đã đăng nhập (lấy từ AsyncStorage)
apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;
