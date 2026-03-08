import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MOCK_DB } from '../../data/mockDatabase';
import { useAuth } from '../../hooks/useAuth';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppCard from '../../components/AppCard';
import StatusBadge from '../../components/StatusBadge';
import EmptyState from '../../components/EmptyState';
import { COLORS, SPACING } from '../../constants/theme';
import AppButton from '../../components/AppButton';

export default function MCBookingsScreen() {
    const { userData } = useAuth();
    const navigation = useNavigation();

    // Filter bookings received by this MC
    const receivedBookings = MOCK_DB.bookings.filter(b => b.mcId === userData?.id);

    const getClientName = (id) => {
        const user = MOCK_DB.users.find(u => u.id === id);
        return user ? user.name : 'Unknown Client';
    };

    const renderItem = ({ item }) => (
        <AppCard onPress={() => navigation.navigate('BookingDetail', { bookingId: item.id })}>
            <View style={styles.cardHeader}>
                <AppText weight="bold" style={{ flex: 1 }}>{item.eventType}</AppText>
                <StatusBadge status={item.status} />
            </View>
            <AppText color={COLORS.textSecondary} style={{ marginBottom: 4 }}>
                Khách Hàng: <AppText weight="bold" color={COLORS.white}>{getClientName(item.clientId)}</AppText>
            </AppText>
            <AppText color={COLORS.textSecondary} style={{ marginBottom: 4 }}>
                📅 {item.eventDate} | 🕒 {item.startTime}
            </AppText>

            <View style={[styles.priceRow, { borderTopColor: COLORS.border, borderTopWidth: 1, marginTop: SPACING.s, paddingTop: SPACING.s }]}>
                <AppText color={COLORS.textMuted}>Giá chốt:</AppText>
                <AppText color={COLORS.success} weight="bold">
                    {item.price.toLocaleString('vi-VN')} VNĐ
                </AppText>
            </View>

            {item.status === 'Pending' && (
                <View style={styles.actionRow}>
                    <AppButton title="Từ chối" variant="outline" style={[styles.actBtn, { borderColor: COLORS.danger }]} />
                    <AppButton title="Chấp nhận" style={styles.actBtn} />
                </View>
            )}
        </AppCard>
    );

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Quản Lý Lịch Đặt" showBackBtn />

            <FlatList
                contentContainerStyle={styles.list}
                data={receivedBookings}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<EmptyState message="Chưa có khách hàng nào đặt lịch" />}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    list: {
        padding: SPACING.m,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.s
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.s,
        marginTop: SPACING.m
    },
    actBtn: {
        flex: 1,
        height: 40,
        paddingVertical: 0
    }
});
