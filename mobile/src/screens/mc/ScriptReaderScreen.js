import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PlaySpacer, Pause, RotateCcw, Play } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS, FONT } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

// Dummy script text
const SCRIPT_TEXT = `Kính thưa quý vị đại biểu, các vị khách quý! 
Chào mừng quý vị đã đến với lễ khai trương của MCHub Flagship Store ngày hôm nay. 

Lời đầu tiên, cho phép MC được thay mặt ban tổ chức gửi tới quý vị lời chào trân trọng và lời chúc sức khỏe nồng nhiệt nhất. 
Trong không khí hân hoan này, chúng ta sẽ cùng nhau chứng kiến một sự khởi đầu mới đầy hứa hẹn...`;

export default function ScriptReaderScreen() {
    const route = useRoute();
    const title = route.params?.title || 'Kịch Bản Đọc';

    const [isPlaying, setIsPlaying] = useState(false);
    const [fontSize, setFontSize] = useState(24);

    // Note: True implementation would involve react-native-reanimated / ScrollView tick down
    // Here we just mock UI for Teleprompter

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title={title} showBackBtn />

            <View style={styles.controlsBar}>
                <AppText weight="medium">Cỡ chữ: {fontSize}</AppText>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <AppButton title="-" variant="outline" onPress={() => setFontSize(f => Math.max(16, f - 2))} style={styles.smallBtn} />
                    <AppButton title="+" variant="outline" onPress={() => setFontSize(f => Math.min(48, f + 2))} style={styles.smallBtn} />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scriptContainer}>
                <AppText
                    style={{ fontSize: fontSize, lineHeight: fontSize * 1.5, textAlign: 'center' }}
                    color={COLORS.white}
                >
                    {SCRIPT_TEXT}
                </AppText>
            </ScrollView>

            {/* Teleprompter Controls */}
            <View style={styles.actionFooter}>
                <AppButton
                    title={isPlaying ? "Dừng Cuộn" : "Bắt Đầu Đọc"}
                    variant={isPlaying ? "danger" : "primary"}
                    onPress={() => setIsPlaying(!isPlaying)}
                    style={{ flex: 1, marginRight: SPACING.s }}
                />
                <AppButton
                    title="Làm Lại"
                    variant="secondary"
                />
            </View>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    controlsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SPACING.m,
        backgroundColor: COLORS.surface,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    smallBtn: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    scriptContainer: {
        padding: SPACING.xl,
        paddingTop: SPACING.xxl * 2,
        paddingBottom: 200,
    },
    actionFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: SPACING.m,
        paddingBottom: SPACING.xl,
        backgroundColor: COLORS.surface,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        flexDirection: 'row'
    }
});
