import { Platform } from 'react-native';

// Toggle this to false to connect directly to the real NodeJS backend.
export const USE_MOCK_API = true;

// 10.0.2.2 is mapped to localhost for Android Emulator.
// Replace with your physical local IP (e.g., 192.168.1.x) if testing on a real device.
const LOCAL_BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000';
const LOCAL_API_URL = `${LOCAL_BASE_URL}/api/v1`;

export const ENV = {
    API_URL: USE_MOCK_API ? 'MOCK_MODE_ENABLED' : LOCAL_API_URL,
    SOCKET_URL: LOCAL_BASE_URL,
    APP_NAME: 'The MC Hub',
    VERSION: '1.0.0',
};
