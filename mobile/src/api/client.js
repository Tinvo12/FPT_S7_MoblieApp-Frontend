import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ⚠️ Lưu ý: Trong React Native (đặc biệt là máy ảo Android), localhost được ánh xạ là 10.0.2.2.
// Đối với thiết bị thật hoặc iOS Simulator, bạn cần dùng địa chỉ IP IPv4 của wifi hiện tại (ví dụ: 192.168.x.x)
const API_URL = 'http://10.0.2.2:5000'; // Đã map với port 5000 của backend MCHud

const apiClient = axios.create({
    baseURL: API_URL,
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
