import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Users, Banknote, ShieldAlert, BarChart } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { useAuth } from '../../hooks/useAuth';
import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import AppCard from '../../components/AppCard';

export default function AdminDashboardScreen() {
    const { userData } = useAuth();

    return (
        <AppScreen useSafeArea>
            <ScrollView contentContainerStyle={styles.container}>
                <AppText variant="subtitle" style={{ marginBottom: 4 }}>Bảng Điều Khiển,</AppText>
                <AppText variant="h2" color={COLORS.danger} style={{ marginBottom: SPACING.xl }}>{userData?.name || 'Administrator'}</AppText>

                <View style={styles.grid}>
                    <View style={styles.kpiCard}>
                        <Users color={COLORS.info} size={32} style={{ marginBottom: SPACING.s }} />
                        <AppText variant="h2">1,204</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>Tổng User</AppText>
                    </View>
                    <View style={styles.kpiCard}>
                        <BarChart color={COLORS.brand} size={32} style={{ marginBottom: SPACING.s }} />
                        <AppText variant="h2">85</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>Show trong tháng</AppText>
                    </View>
                    <View style={styles.kpiCard}>
                        <Banknote color={COLORS.success} size={32} style={{ marginBottom: SPACING.s }} />
                        <AppText variant="h3">32.5M</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>Doanh Thu</AppText>
                    </View>
                    <View style={[styles.kpiCard, { borderColor: COLORS.danger, borderWidth: 1 }]}>
                        <ShieldAlert color={COLORS.danger} size={32} style={{ marginBottom: SPACING.s }} />
                        <AppText variant="h2" color={COLORS.danger}>4</AppText>
                        <AppText variant="caption" color={COLORS.danger}>Báo cáo vi phạm</AppText>
                    </View>
                </View>

                <AppText variant="h3" style={styles.sectionTitle}>Cảnh Báo Hệ Thống</AppText>
                <AppCard style={{ backgroundColor: 'rgba(255, 68, 68, 0.1)', borderColor: 'rgba(255, 68, 68, 0.3)' }}>
                    <AppText weight="bold" color={COLORS.danger} style={{ marginBottom: 4 }}>Khách Hàng C1 - Khiếu Nại Hoàn Tiền</AppText>
                    <AppText color={COLORS.white} style={{ lineHeight: 22 }}>
                        Khách hàng yêu cầu hoàn trả 100% chi phí sự kiện Đám Cưới A&B từ MC Quang Minh. Cần quản trị viên kiểm duyệt bằng chứng trong kênh Dispute.
                    </AppText>
                </AppCard>

                <AppCard style={{ backgroundColor: 'rgba(255, 204, 0, 0.1)', borderColor: 'rgba(255, 204, 0, 0.3)' }}>
                    <AppText weight="bold" color={COLORS.warning} style={{ marginBottom: 4 }}>Pending Verify</AppText>
                    <AppText color={COLORS.white}>Có 3 hồ sơ MC mới được tạo, đang chờ xét duyệt để cấp tích xanh hoạt động công khai.</AppText>
                </AppCard>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: SPACING.xl,
    },
    kpiCard: {
        width: '48%',
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.l,
        alignItems: 'center',
        marginBottom: SPACING.m,
    },
    sectionTitle: {
        marginBottom: SPACING.m,
    }
});
