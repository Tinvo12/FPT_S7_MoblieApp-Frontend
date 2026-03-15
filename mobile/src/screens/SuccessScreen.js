import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING } from '../constants/theme';

export default function SuccessScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.icon}>✅</AppText>
            <AppText variant="h1" weight="bold" style={styles.title}>Hoàn Thành!</AppText>
            <AppText color={COLORS.textMuted} style={styles.message}>Mọi thao tác đã thành công. Giao dịch đã được lưu vào hệ thống bảo vệ (Escrow) của MCHud.</AppText>

            <AppButton 
                title="Quay Về Trang Chủ" 
                onPress={() => navigation.navigate('Dashboard')} 
                style={styles.homeBtn} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 80,
        marginBottom: SPACING.m
    },
    title: {
        marginBottom: SPACING.s,
    },
    message: {
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: SPACING.xxl
    },
    homeBtn: {
        width: '100%',
    }
});
