import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function ScriptLibraryScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Thư Viện Kịch Bản</AppText>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <AppText variant="h3" weight="bold" style={styles.cardTitle}>Kịch Bản Khai Trương 2026</AppText>
                    <AppButton 
                        title="Đọc Ngay" 
                        onPress={() => navigation.navigate('ScriptReader')} 
                        style={styles.readBtn}
                        textStyle={{ fontSize: 13 }}
                    />
                </View>
                <AppText variant="body" color={COLORS.textMuted} style={styles.cardContent}>Mẫu kịch bản hoàn chỉnh cho các sự kiện khai trương TTTM, cửa hàng, chi nhánh mới.</AppText>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <AppText variant="h3" weight="bold" style={styles.cardTitle}>Hội Thảo Công Nghệ Blockchain</AppText>
                    <AppButton 
                        title="Đọc Ngay" 
                        onPress={() => navigation.navigate('ScriptReader')} 
                        style={styles.readBtn}
                        textStyle={{ fontSize: 13 }}
                    />
                </View>
                <AppText variant="body" color={COLORS.textMuted} style={styles.cardContent}>Thuật ngữ IT, cách dẫn dắt phiên panel discussion hiện đại.</AppText>
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
        borderLeftColor: COLORS.success
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.s
    },
    cardTitle: {
        flex: 1,
        marginRight: SPACING.m
    },
    readBtn: {
        paddingVertical: SPACING.xs,
        paddingHorizontal: SPACING.s,
        borderRadius: RADIUS.small
    },
    cardContent: {
        lineHeight: 20
    },
});
