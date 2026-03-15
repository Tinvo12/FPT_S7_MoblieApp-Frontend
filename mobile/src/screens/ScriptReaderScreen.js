import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function ScriptReaderScreen() {
    return (
        <ScrollView style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Đọc Kịch Bản</AppText>

            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>MC: Lời chào mở đầu</AppText>
                <AppText color={COLORS.white} style={styles.cardContent}>"Kính thưa quý vị đại biểu, thưa quý vị khách quý! Chào mừng quý vị đã đến với sự kiện ra mắt sản phẩm MCHud ngày hôm nay!"</AppText>
            </View>
            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>MC: Giới thiệu</AppText>
                <AppText color={COLORS.white} style={styles.cardContent}>"Sự kiện hôm nay nhằm tôn vinh những giá trị..."</AppText>
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
        fontSize: 16,
        lineHeight: 24,
        fontStyle: 'italic',
    },
});
