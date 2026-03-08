import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ShieldAlert, ThumbsUp, Frown, Sparkles } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

export default function FeedbackResultScreen() {
    const navigation = useNavigation();

    // MOCK AI DATA
    const mockResult = {
        score: 72,
        wpm: 140, // words per min, normal is ~120-150
        fillerWords: ['à', 'ờ', 'ừm'],
        fillerCount: 3,
        intonationLevel: 'Trung Bình', // Average
        suggestions: [
            'Tốc độ đọc khá tốt (140 WPM).',
            'Cố gắng giảm thiểu 3 từ thừa đã phát hiện.',
            'Nhấn nhá mạnh hơn ở các đại từ nhân xưng.'
        ]
    };

    const getScoreColor = () => {
        if (mockResult.score >= 80) return COLORS.success;
        if (mockResult.score >= 60) return COLORS.warning;
        return COLORS.danger;
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Kết Quả Phân Tích AI" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={[styles.scoreCard, { borderColor: getScoreColor() }]}>
                    <Sparkles color={getScoreColor()} size={40} style={{ marginBottom: SPACING.s }} />
                    <AppText variant="h1" style={{ color: getScoreColor(), fontSize: 48 }}>{mockResult.score}</AppText>
                    <AppText weight="bold" color={COLORS.textSecondary}>Điểm Đọc</AppText>
                </View>

                <View style={styles.metricsGrid}>
                    <View style={styles.metricBox}>
                        <AppText variant="caption" color={COLORS.textMuted}>Tốc Độ (WPM)</AppText>
                        <AppText variant="h2">{mockResult.wpm}</AppText>
                        <AppText variant="caption" color={COLORS.success} style={{ marginTop: 2 }}>Khá Tốt</AppText>
                    </View>
                    <View style={styles.metricBox}>
                        <AppText variant="caption" color={COLORS.textMuted}>Từ Thừa (Filler)</AppText>
                        <AppText variant="h2" color={COLORS.warning}>{mockResult.fillerCount}</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary} style={{ marginTop: 2 }}>[{mockResult.fillerWords.join(', ')}]</AppText>
                    </View>
                    <View style={styles.metricBox}>
                        <AppText variant="caption" color={COLORS.textMuted}>Ngữ Điệu</AppText>
                        <AppText variant="h3" style={{ marginVertical: SPACING.xs }}>{mockResult.intonationLevel}</AppText>
                        <AppText variant="caption" color={COLORS.warning} style={{ marginTop: 2 }}>Cần Nhấn Nhá</AppText>
                    </View>
                </View>

                <View style={styles.suggestionsCard}>
                    <AppText variant="h3" style={{ marginBottom: SPACING.m, color: COLORS.brandLight }}>Gợi Ý Từ MCHub AI</AppText>
                    {mockResult.suggestions.map((s, idx) => (
                        <View key={idx} style={styles.suggestionRow}>
                            <View style={styles.dot} />
                            <AppText style={{ flex: 1, lineHeight: 22 }}>{s}</AppText>
                        </View>
                    ))}
                </View>

                <AppButton
                    title="Luyện Tập Lại Bài Này"
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: SPACING.xl }}
                />
                <AppButton
                    title="Quay Về Danh Mục AI"
                    variant="outline"
                    onPress={() => navigation.navigate('VoiceCoachHome')}
                    style={{ marginTop: SPACING.m }}
                />
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    scoreCard: {
        alignItems: 'center',
        padding: SPACING.xl * 1.5,
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.large,
        borderWidth: 2,
        marginBottom: SPACING.xl,
    },
    metricsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.xl,
        gap: SPACING.m,
    },
    metricBox: {
        flex: 1,
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    suggestionsCard: {
        backgroundColor: COLORS.surfaceHighlight,
        padding: SPACING.l,
        borderRadius: RADIUS.medium,
    },
    suggestionRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: SPACING.s,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.brand,
        marginTop: 8,
        marginRight: 10,
    }
});
