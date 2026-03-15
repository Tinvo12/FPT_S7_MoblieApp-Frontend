import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function MCPublicProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Mocking avatar base */}
            <View style={styles.avatarPlaceholder} />

            <AppText variant="h1" weight="bold" style={styles.mcName}>Phạm Quang Minh</AppText>
            <AppText variant="body" color={COLORS.textMuted} style={styles.mcTitle}>MC Sự Kiện / Người Dẫn Chương Trình Truyền Hình</AppText>

            <AppButton 
                title="BOOK NOW" 
                onPress={() => {}} 
                style={styles.bookBtn} 
            />

            <View style={styles.infoSection}>
                <AppText variant="h3" weight="bold" style={styles.sectionTitle}>Giới Thiệu</AppText>
                <AppText color={COLORS.textSecondary} style={styles.sectionContent}>Hơn 5 năm kinh nghiệm dẫn các chương trình giải trí và hội nghị cấp cao. Phong cách chững chạc, humor.</AppText>
            </View>

            <View style={styles.infoSection}>
                <AppText variant="h3" weight="bold" style={styles.sectionTitle}>Chuyên Môn</AppText>
                <AppText style={styles.badge}>Hội nghị</AppText>
                <AppText style={styles.badge}>Lễ hội âm nhạc</AppText>
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
    avatarPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: COLORS.brand,
        alignSelf: 'center',
        marginBottom: SPACING.m,
        marginTop: SPACING.m
    },
    mcName: {
        textAlign: 'center',
        marginBottom: SPACING.xs,
    },
    mcTitle: {
        textAlign: 'center',
        marginBottom: SPACING.m
    },
    bookBtn: {
        marginBottom: SPACING.xl
    },
    infoSection: {
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m
    },
    sectionTitle: {
        marginBottom: SPACING.s,
    },
    sectionContent: {
        lineHeight: 22
    },
    badge: {
        color: COLORS.brand,
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.s,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.pill,
        alignSelf: 'flex-start',
        overflow: 'hidden',
        marginBottom: SPACING.xs,
        fontWeight: 'bold',
        fontSize: 12
    }
});
