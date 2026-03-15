import client from './client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLES } from '../constants/roles';

export const login = async (email, password) => {
    try {
        // [Development MOCK] Bỏ qua gọi API thực tế để test UI
        // const response = await client.post('/api/auth/login', { email, password });
        
        console.log(`Đang chạy mock login cho: ${email}`);
        
        // Giả lập delay mạng (1s)
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockResponse = {
            data: {
                token: 'mock-jwt-token-mchud-12345',
                user: {
                    id: 1,
                    email: email,
                    name: "Trần Văn A",
                    role: ROLES.MC
                }
            }
        };

        if (mockResponse.data.token) {
            // Lưu token (tương thích cũ, có thể thừa khi dùng AuthContext login, nhưng an toàn)
            await AsyncStorage.setItem('userToken', mockResponse.data.token);
        }
        
        return mockResponse.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    await AsyncStorage.removeItem('userToken');
};
