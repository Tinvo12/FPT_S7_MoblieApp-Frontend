import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Mic2, Activity, Zap } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

export default function VoiceCoachHomeScreen() {
    const navigation = useNavigation();

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="MCHub AI Voice Coach" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.heroSection}>
                    <Mic2 size={64} color={COLORS.brandLight} style={{ marginBottom: SPACING.m }} />
                    <AppText variant="h1" align="center" style={{ marginBottom: SPACING.s }}>Phân Tích Giọng Nói AI</AppText>
                    <AppText variant="subtitle" align="center" style={{ lineHeight: 24 }}>
                        Đọc thử một đoạn kịch bản. AI sẽ đo tốc độ (WPM), cao độ, ngữ điệu và phát hiện các khoảng lặng từ thừa (à, ừm...).
                    </AppText>
                </View>

                <AppText variant="h3" style={styles.title}>Cách thức hoạt động:</AppText>
                <View style={styles.stepsBox}>
                    <View style={styles.step}>
                        <Activity color={COLORS.success} />
                        <AppText style={styles.stepText}>Thu âm 30 - 60 giây giọng đọc thực tế.</AppText>
                    </View>
                    <View style={styles.step}>
                        <Zap color={COLORS.warning} />
                        <AppText style={styles.stepText}>Hệ thống Speech-to-Text phân tích âm âm lượng và từ ngữ.</AppText>
                    </View>
                    <View style={[styles.step, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                        <Mic2 color={COLORS.brand} />
                        <AppText style={styles.stepText}>Nhận báo cáo chi tiết & gợi ý luyện tập.</AppText>
                    </View>
                </View>

                <AppButton
                    title="Bắt Đầu Luyện Tập Nghề Đọc"
                    onPress={() => navigation.navigate('PracticeSession')}
                    style={styles.startBtn}
                />
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    heroSection: {
        alignItems: 'center',
        padding: SPACING.xl,
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.large,
        marginBottom: SPACING.xl,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    title: {
        marginBottom: SPACING.m,
    },
    stepsBox: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: SPACING.m,
        marginBottom: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.divider,
    },
    stepText: {
        flex: 1,
        marginLeft: SPACING.m,
    },
    startBtn: {
        marginTop: SPACING.xxl * 1.5,
    }
});
