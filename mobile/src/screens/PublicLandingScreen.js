import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function PublicLandingScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <AppText variant="h1" weight="bold" style={styles.title}>MCHud Landing Page</AppText>
            <AppText variant="body" color={COLORS.textSecondary} style={styles.subtitle}>Chào mừng bạn đến với mạng lưới MC chuyên nghiệp</AppText>

            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>Giới thiệu</AppText>
                <AppText variant="body" color={COLORS.textMuted} style={styles.cardContent}>Khám phá các MC tài năng và đặt lịch chuyên nghiệp thông qua MCHud.</AppText>
            </View>

            <AppButton 
                title="Đăng Nhập / Đăng Ký" 
                onPress={() => navigation.navigate('Login')} 
                style={styles.actionButton}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    title: {
        marginBottom: SPACING.s,
    },
    subtitle: {
        marginBottom: SPACING.xl,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.brand
    },
    cardTitle: {
        marginBottom: SPACING.s,
    },
    cardContent: {
        lineHeight: 20
    },
    actionButton: {
        marginTop: SPACING.m,
    }
});
