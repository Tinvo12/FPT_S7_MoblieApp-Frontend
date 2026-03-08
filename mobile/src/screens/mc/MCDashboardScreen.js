import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CalendarRange, Megaphone, Bell, Mic } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { useAuth } from '../../hooks/useAuth';

import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import Avatar from '../../components/Avatar';
import AppCard from '../../components/AppCard';

export default function MCDashboardScreen() {
    const { userData } = useAuth();
    const navigation = useNavigation();

    return (
        <AppScreen useSafeArea>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View>
                        <AppText variant="subtitle">MC Partner,</AppText>
                        <AppText variant="h2">{userData?.name || 'Vô Danh'}</AppText>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Avatar src={userData?.avatar} size={50} isVerified />
                    </TouchableOpacity>
                </View>

                {/* Highlight Banner */}
                <AppCard style={styles.banner} onPress={() => navigation.navigate('MCBookings')}>
                    <View style={styles.bannerContent}>
                        <View>
                            <AppText color={COLORS.success} weight="bold" style={{ marginBottom: 4 }}>1 Show Đang Chờ</AppText>
                            <AppText color={COLORS.white}>Bạn có lời mời dẫn chương trình mới!</AppText>
                        </View>
                        <CalendarRange color={COLORS.success} size={30} />
                    </View>
                </AppCard>

                {/* Grid Tools */}
                <AppText variant="h3" style={styles.sectionTitle}>Công Cụ MC</AppText>
                <View style={styles.grid}>
                    <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('TabSchedule')}>
                        <CalendarRange color={COLORS.brand} size={32} />
                        <AppText weight="medium" style={{ marginTop: SPACING.s }}>Lịch Trống</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('VoiceCoachHome')}>
                        <Mic color={COLORS.warning} size={32} />
                        <AppText weight="medium" style={{ marginTop: SPACING.s }}>AI Luyện Giọng</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('TabScripts')}>
                        <Megaphone color={COLORS.info} size={32} />
                        <AppText weight="medium" style={{ marginTop: SPACING.s }}>Kho Kịch Bản</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Notifications')}>
                        <Bell color={COLORS.danger} size={32} />
                        <AppText weight="medium" style={{ marginTop: SPACING.s }}>Thông Báo</AppText>
                    </TouchableOpacity>
                </View>

                <AppText variant="h3" style={styles.sectionTitle}>Thống kê tháng này</AppText>
                <AppCard>
                    <View style={styles.statRow}>
                        <AppText color={COLORS.textSecondary}>Sự kiện đã dẫn:</AppText>
                        <AppText weight="bold">2</AppText>
                    </View>
                    <View style={styles.statRow}>
                        <AppText color={COLORS.textSecondary}>Điểm đánh giá TB:</AppText>
                        <AppText weight="bold" color={COLORS.warning}>4.8 / 5.0</AppText>
                    </View>
                    <View style={[styles.statRow, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                        <AppText color={COLORS.textSecondary}>Tổng thu nhập chờ duyệt:</AppText>
                        <AppText weight="bold" color={COLORS.success}>25.000.000 đ</AppText>
                    </View>
                </AppCard>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
        paddingTop: SPACING.s,
    },
    banner: {
        backgroundColor: 'rgba(0, 230, 118, 0.15)',
        borderColor: 'rgba(0, 230, 118, 0.3)',
        marginBottom: SPACING.xl,
    },
    bannerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        marginBottom: SPACING.m,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: SPACING.l,
    },
    gridItem: {
        width: '48%',
        backgroundColor: COLORS.surface,
        padding: SPACING.l,
        borderRadius: RADIUS.medium,
        alignItems: 'center',
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: SPACING.m,
        marginBottom: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.divider
    }
});
