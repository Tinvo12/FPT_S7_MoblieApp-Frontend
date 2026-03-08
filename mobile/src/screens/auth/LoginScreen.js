import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Mail, Lock } from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { ROLES } from '../../constants/roles';
import { useAuth } from '../../hooks/useAuth';
import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

// Quick Mock Helper
const MOCK_USERS = {
    'mc@test.com': { id: 'm1', name: 'MC Demo', role: ROLES.MC, token: 'fake-mc-token' },
    'customer@test.com': { id: 'c1', name: 'Customer Demo', role: ROLES.CUSTOMER, token: 'fake-cus-token' },
    'admin@test.com': { id: 'a1', name: 'Admin Demo', role: ROLES.ADMIN, token: 'fake-adm-token' },
};

export default function LoginScreen({ navigation }) {
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async () => {
        setErrorMsg('');
        if (!email || !password) {
            setErrorMsg('Vui lòng điền email và mật khẩu.');
            return;
        }

        setLoading(true);
        try {
            // Toggle USE_MOCK_API branch inside real service later. For pure UI MVP auth:
            setTimeout(() => {
                const mockUser = MOCK_USERS[email.toLowerCase()];
                if (mockUser && password === '123456') {
                    // Success mock login
                    login(mockUser.token, { id: mockUser.id, name: mockUser.name, email, role: mockUser.role });
                } else {
                    setErrorMsg('Sai email hoặc mật khẩu (Dùng MC/Customer/Admin @test.com, pass: 123456)');
                }
                setLoading(false);
            }, 1000);
        } catch (e) {
            setErrorMsg('Đã có lỗi xảy ra.');
            setLoading(false);
        }
    };

    return (
        <AppScreen style={styles.container}>
            <View style={styles.content}>
                <AppText variant="h1" align="center" style={styles.title}>The MC Hub</AppText>
                <AppText variant="subtitle" align="center" style={styles.subtitle}>
                    Đăng nhập vào hệ thống
                </AppText>

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
                    title="Đăng Nhập"
                    onPress={handleLogin}
                    loading={loading}
                    style={styles.loginBtn}
                />

                <View style={styles.footer}>
                    <AppText color={COLORS.textSecondary}>Chưa có tài khoản? </AppText>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <AppText color={COLORS.brand} weight="bold">Đăng ký ngay</AppText>
                    </TouchableOpacity>
                </View>

                {/* Demo Helper */}
                <View style={styles.demoHelper}>
                    <AppText variant="caption" align="center" color={COLORS.warning}>[Demo Access]</AppText>
                    <AppText variant="caption" align="center" color={COLORS.textMuted}>MC: mc@test.com | Pass: 123456</AppText>
                    <AppText variant="caption" align="center" color={COLORS.textMuted}>Khách: customer@test.com | Pass: 123456</AppText>
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    content: {
        padding: SPACING.xl,
    },
    title: {
        color: COLORS.brand,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        marginBottom: SPACING.xl * 1.5,
    },
    loginBtn: {
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
    },
    demoHelper: {
        marginTop: SPACING.xl * 2,
        padding: SPACING.m,
        backgroundColor: COLORS.surface,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.warning + '50'
    }
});
