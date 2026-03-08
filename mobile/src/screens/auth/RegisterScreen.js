import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Mail, Lock, User, AtSign } from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleRegister = async () => {
        setErrorMsg('');
        if (!name || !email || !password) {
            setErrorMsg('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        setLoading(true);
        try {
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('Login');
            }, 1000);
        } catch (e) {
            setErrorMsg('Đã có lỗi xảy ra.');
            setLoading(false);
        }
    };

    return (
        <AppScreen style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <AppText variant="h2" align="center" style={styles.title}>Tạo Tài Khoản</AppText>
                <AppText variant="subtitle" align="center" style={styles.subtitle}>
                    Tham gia mạng lưới MCHub ngay
                </AppText>

                <AppInput
                    icon={User}
                    placeholder="Họ và tên"
                    value={name}
                    onChangeText={setName}
                />

                <AppInput
                    icon={Mail}
                    placeholder="Email của bạn"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <AppInput
                    icon={Lock}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {errorMsg ? (
                    <AppText color={COLORS.danger} style={styles.error}>{errorMsg}</AppText>
                ) : null}

                <AppButton
                    title="Đăng Ký"
                    onPress={handleRegister}
                    loading={loading}
                    style={styles.registerBtn}
                />

                <View style={styles.footer}>
                    <AppText color={COLORS.textSecondary}>Đã có tài khoản? </AppText>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <AppText color={COLORS.brand} weight="bold">Đăng nhập</AppText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    content: {
        padding: SPACING.xl,
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        marginBottom: SPACING.xs,
    },
    subtitle: {
        marginBottom: SPACING.xl * 1.5,
    },
    registerBtn: {
        marginTop: SPACING.l,
    },
    error: {
        marginTop: -SPACING.s,
        marginBottom: SPACING.s,
        textAlign: 'center'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SPACING.xl,
    }
});
