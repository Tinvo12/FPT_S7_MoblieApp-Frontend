import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import StatusBadge from '../../components/StatusBadge';

export default function MCScheduleScreen() {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    // Generating a simple 7-day strip for Mock UI
    const days = Array.from({ length: 7 }).map((_, i) => dayjs().add(i, 'day'));

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Quản Lý Lịch Trình" />

            <View style={styles.calendarStrip}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {days.map((day, idx) => {
                        const isSelected = day.isSame(selectedDate, 'day');
                        return (
                            <TouchableOpacity
                                key={idx}
                                style={[styles.dayCard, isSelected && styles.dayCardSelected]}
                                onPress={() => setSelectedDate(day)}
                            >
                                <AppText color={isSelected ? COLORS.white : COLORS.textSecondary} variant="caption" weight="bold">
                                    {day.format('ddd')}
                                </AppText>
                                <AppText color={isSelected ? COLORS.white : COLORS.textMuted} variant="h3">
                                    {day.format('DD')}
                                </AppText>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                <AppText variant="h3" style={{ marginBottom: SPACING.m }}>
                    Lịch ngày {selectedDate.format('DD/MM/YYYY')}
                </AppText>

                {/* MOCK DATA for specific day, simulating conflict / busy slot */}
                {selectedDate.isSame(dayjs(), 'day') ? (
                    <>
                        <View style={styles.eventSlot}>
                            <View style={styles.timeCol}>
                                <AppText weight="bold">09:00</AppText>
                                <AppText variant="caption" color={COLORS.textMuted}>12:00</AppText>
                            </View>
                            <View style={[styles.eventCard, { borderLeftColor: COLORS.success }]}>
                                <AppText weight="bold" style={{ marginBottom: 4 }}>Sự kiện Đám Cưới A&B</AppText>
                                <AppText color={COLORS.textSecondary} variant="caption" style={{ marginBottom: 8 }}>Trống Đồng Center</AppText>
                                <StatusBadge status="Confirmed" />
                            </View>
                        </View>

                        <View style={styles.eventSlot}>
                            <View style={styles.timeCol}>
                                <AppText weight="bold">14:00</AppText>
                                <AppText variant="caption" color={COLORS.textMuted}>18:00</AppText>
                            </View>
                            <View style={[styles.eventCard, { borderLeftColor: COLORS.border, backgroundColor: COLORS.surfaceHighlight }]}>
                                <AppText color={COLORS.textSecondary}>Lịch cá nhân (Bận)</AppText>
                            </View>
                        </View>
                    </>
                ) : (
                    <View style={styles.emptySlot}>
                        <AppText color={COLORS.textMuted}>Bạn hoàn toàn trống lịch trong ngày này.</AppText>
                    </View>
                )}
            </ScrollView>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    calendarStrip: {
        backgroundColor: COLORS.surface,
        paddingVertical: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    dayCard: {
        padding: SPACING.m,
        marginHorizontal: SPACING.xs,
        alignItems: 'center',
        borderRadius: RADIUS.medium,
        width: 60,
    },
    dayCardSelected: {
        backgroundColor: COLORS.brand,
    },
    container: {
        padding: SPACING.m,
    },
    eventSlot: {
        flexDirection: 'row',
        marginBottom: SPACING.m,
    },
    timeCol: {
        width: 60,
        alignItems: 'center',
        paddingTop: SPACING.xs,
    },
    eventCard: {
        flex: 1,
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        borderLeftWidth: 4,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    emptySlot: {
        padding: SPACING.xl,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderStyle: 'dashed'
    }
});
