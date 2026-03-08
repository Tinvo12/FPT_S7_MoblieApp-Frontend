import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Mic, Square, Loader } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';

export default function PracticeSessionScreen() {
    const navigation = useNavigation();
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [timer, setTimer] = useState(0);

    // Simple Timer Simulation
    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => setTimer(prev => prev + 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    const handleMicPress = () => {
        if (isRecording) {
            // Stop and Analyze
            setIsRecording(false);
            setIsAnalyzing(true);

            // Mock API delay for AI processing
            setTimeout(() => {
                setIsAnalyzing(false);
                navigation.navigate('FeedbackResult');
            }, 3000);
        } else {
            setIsRecording(true);
            setTimer(0);
        }
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    if (isAnalyzing) {
        return (
            <AppScreen style={styles.centerContainer}>
                <Loader color={COLORS.brandLight} size={64} style={{ marginBottom: SPACING.l }} />
                <AppText variant="h2" style={{ marginBottom: SPACING.xs }}>Đang phân tích...</AppText>
                <AppText color={COLORS.textSecondary}>AI đang trích xuất ngữ điệu và phát âm của bạn.</AppText>
            </AppScreen>
        );
    }

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Thực Hành Đọc" showBackBtn />

            <View style={styles.promptContainer}>
                <AppText variant="caption" color={COLORS.brandLight} weight="bold">BÀI ĐỌC THỬ (20S)</AppText>
                <AppText variant="h3" style={styles.promptText}>
                    "Xin nhiệt liệt chào mừng toàn thể quý vị khách quý, các vị đại biểu đã đến chung vui trong một buổi lễ vô cùng đặc biệt ngày hôm nay. Chúng tôi rất vinh dự được đón tiếp quý vị..."
                </AppText>
            </View>

            <View style={styles.recordingArea}>
                <AppText variant="h1" style={styles.timer}>{formatTime(timer)}</AppText>
                <AppText color={COLORS.danger} style={{ opacity: isRecording ? 1 : 0, marginBottom: SPACING.xl }}>
                    ● Đang Ghi Âm
                </AppText>

                <TouchableOpacity
                    style={[styles.micButton, isRecording && styles.micButtonStop]}
                    onPress={handleMicPress}
                    activeOpacity={0.8}
                >
                    {isRecording ? <Square color={COLORS.white} size={36} /> : <Mic color={COLORS.white} size={36} />}
                </TouchableOpacity>
            </View>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING.xl,
    },
    promptContainer: {
        padding: SPACING.xl,
        backgroundColor: COLORS.surface,
        margin: SPACING.m,
        borderRadius: RADIUS.large,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    promptText: {
        marginTop: SPACING.m,
        lineHeight: 28,
    },
    recordingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: SPACING.xxl * 2,
    },
    timer: {
        fontSize: 48,
        marginBottom: SPACING.s,
        fontVariant: ['tabular-nums']
    },
    micButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.brand,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.brand,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 8,
    },
    micButtonStop: {
        backgroundColor: COLORS.danger,
        shadowColor: COLORS.danger,
    }
});
