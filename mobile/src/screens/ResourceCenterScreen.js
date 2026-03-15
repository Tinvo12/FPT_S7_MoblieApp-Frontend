import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function ResourceCenterScreen() {
    return (
        <ScrollView style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Trung tâm hỗ trợ</AppText>

            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>Hướng dẫn sử dụng App</AppText>
                <AppText variant="body" color={COLORS.textMuted} style={styles.cardContent}>Tìm hiểu cách để đăng bài profile hoàn hảo, và tối ưu hóa lượt booking.</AppText>
            </View>
            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>Chính sách Thanh Toán & Nạp Rút</AppText>
                <AppText variant="body" color={COLORS.textMuted} style={styles.cardContent}>Tham khảo biểu phí và quy định về thu nhập của MC.</AppText>
            </View>
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
        marginBottom: SPACING.m,
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
});
