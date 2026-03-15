import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { login } from '../api/authService';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { COLORS, SPACING } from '../constants/theme';

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
            // Sử dụng hàm mock login thay vì bypass
            const result = await login(email, password); 
            
            // Lấy Context login (nếu RootNavigator được bọc bằng AuthProvider)
            // Vì RootNav chưa fully wired với AuthContext trong ví dụ này, 
            // ta tạm dùng navigation.replace('Main')
            Alert.alert('Thành công', `Chào mừng ${result.user.name}`);
            navigation.replace('Main');
        } catch (error) {
            Alert.alert('Lỗi đăng nhập', error?.response?.data?.message || 'Có lỗi xảy ra');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <AppText variant="h1" weight="bold" style={styles.title}>Authentication</AppText>

            <AppInput
                placeholder="Địa chỉ Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <AppInput
                placeholder="Mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <AppButton
                title="Đăng Nhập"
                onPress={handleLogin}
                disabled={loading}
                loading={loading}
                style={styles.button}
            />

            <View style={styles.registerContainer}>
                <AppText color={COLORS.textSecondary}>Chưa có tài khoản? </AppText>
                <AppButton 
                    title="Đăng ký ngay" 
                    variant="ghost" 
                    onPress={() => navigation.navigate('Register')} 
                    style={styles.registerLink}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background, // Yêu cầu từ Stitch: Dark Mode Theme
        justifyContent: 'center',
        padding: SPACING.l,
    },
    title: {
        marginBottom: SPACING.xxl,
        textAlign: 'center',
        color: COLORS.white,
    },
    button: {
        marginTop: SPACING.m,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    registerLink: {
        paddingHorizontal: 0,
        paddingVertical: 0
    }
});
