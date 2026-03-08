import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { login } from '../api/authService';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu.');
            return;
        }

        setLoading(true);
        try {
            // Gọi API thực tế đên backend NodeJS. Nếu backend chưa bật hoặc chưa xong, comment dòng login lại:
            // await login(email, password); 

            // Bypass giả lập đăng nhập thành công
            Alert.alert('Thành công', 'Đăng nhập thành công!');
            navigation.replace('Dashboard');
        } catch (error) {
            Alert.alert('Lỗi đăng nhập', error?.response?.data?.message || 'Không thể kết nối tới server (Port 5000)');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Authentication</Text>

            <TextInput
                style={styles.input}
                placeholder="Địa chỉ Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#ffffff" />
                ) : (
                    <Text style={styles.buttonText}>Đăng Nhập</Text>
                )}
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Chưa có tài khoản? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerLink}>Đăng ký ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Yêu cầu từ Stitch: Dark Mode Theme
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        // Yêu cầu font Inter - Ở RN chưa nhúng font ngoài, mặc định font sans-serif sẽ render đủ đẹp
    },
    input: {
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        borderRadius: 8, // Yêu cầu từ Stitch: ROUND_EIGHT
        padding: 16,
        marginBottom: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#333'
    },
    button: {
        backgroundColor: '#000080', // Yêu cầu từ Stitch: Brand Custom Color
        borderRadius: 8, // ROUND_EIGHT
        padding: 16,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000080',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    registerText: {
        color: '#888',
        fontSize: 16,
    },
    registerLink: {
        color: '#000080',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
