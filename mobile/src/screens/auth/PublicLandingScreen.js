import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { COLORS, SPACING } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

const { width } = Dimensions.get('window');

export default function PublicLandingScreen({ navigation }) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.imageContainer}>
                {/* Mock abstract visual or logo space */}
                <View style={styles.heroCircle} />
            </View>

            <View style={styles.content}>
                <AppText variant="h1" align="center" style={styles.title}>The MC Hub</AppText>
                <AppText variant="subtitle" align="center" style={styles.subtitle}>
                    Mạng lưới kết nối MC chuyên nghiệp hàng đầu. Tìm kiếm, đặt lịch và quản lý sự kiện dễ dàng.
                </AppText>

                <AppButton
                    title="Bắt Đầu Ngay"
                    onPress={() => navigation.navigate('Register')}
                    style={styles.btnPrimary}
                />

                <AppButton
                    title="Đã có tài khoản? Đăng nhập"
                    variant="outline"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.btnSecondary}
                />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
    },
    heroCircle: {
        width: width * 0.6,
        height: width * 0.6,
        borderRadius: width * 0.3,
        backgroundColor: COLORS.brand,
        opacity: 0.2,
        borderWidth: 20,
        borderColor: COLORS.brandLight,
    },
    content: {
        flex: 1,
        padding: SPACING.xl,
        justifyContent: 'center',
    },
    title: {
        marginBottom: SPACING.m,
    },
    subtitle: {
        marginBottom: SPACING.xxl,
        lineHeight: 24,
    },
    btnPrimary: {
        marginBottom: SPACING.m,
    },
    btnSecondary: {}
});
