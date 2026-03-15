import React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function PostEventReviewScreen() {
    return (
        <ScrollView style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Đánh Giá Sau Sự Kiện</AppText>

            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>Đánh giá MC Cát Tường - Sự kiện: Lễ Khai Trương 15/08</AppText>
                <AppText style={styles.ratingText}>Chất lượng: ⭐⭐⭐⭐⭐</AppText>
                <TextInput
                    style={styles.reviewInput}
                    multiline
                    numberOfLines={4}
                    placeholder="Nhập nhận xét của bạn về MC..."
                    placeholderTextColor={COLORS.textMuted}
                />
                <AppButton 
                    title="Gửi Đánh Giá" 
                    onPress={() => {}} 
                    style={styles.submitBtn} 
                />
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
    ratingText: {
        color: COLORS.warning, // Màu vang sao đánh giá
        fontSize: 20,
        marginBottom: SPACING.m
    },
    reviewInput: {
        backgroundColor: COLORS.background,
        color: COLORS.white,
        borderRadius: RADIUS.medium,
        padding: SPACING.s,
        borderWidth: 1,
        borderColor: COLORS.border,
        minHeight: 100,
        textAlignVertical: 'top',
        marginBottom: SPACING.m
    },
    submitBtn: {
        alignItems: 'center'
    }
});
