import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { COLORS, SPACING } from '../constants/theme';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp.');
            return;
        }

        setLoading(true);
        try {
            // Giả lập xử lý đăng ký (Bypass)
            setTimeout(() => {
                Alert.alert('Thành công', 'Đăng ký tài khoản thành công!');
                navigation.replace('Login');
            }, 1000);
        } catch (error) {
            Alert.alert('Lỗi đăng ký', 'Có lỗi xảy ra, vui lòng thử lại sau.');
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
            <AppText variant="h1" weight="bold" style={styles.title}>Đăng Ký Tài Khoản</AppText>

            <AppInput
                placeholder="Họ và Tên"
                value={name}
                onChangeText={setName}
            />
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
            <AppInput
                placeholder="Xác nhận mật khẩu"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <AppButton
                title="Tạo Tài Khoản"
                onPress={handleRegister}
                disabled={loading}
                loading={loading}
                style={styles.button}
            />

            <View style={styles.loginContainer}>
                <AppText color={COLORS.textSecondary}>Đã có tài khoản? </AppText>
                <AppButton 
                    title="Đăng nhập ngay" 
                    variant="ghost" 
                    onPress={() => navigation.navigate('Login')} 
                    style={styles.loginLink}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContainer: {
        flexGrow: 1,
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
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    loginLink: {
        paddingHorizontal: 0,
        paddingVertical: 0
    }
});
