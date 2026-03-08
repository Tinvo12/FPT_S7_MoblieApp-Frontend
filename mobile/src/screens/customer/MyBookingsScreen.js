import React, { useState } from 'react';
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

export default function MyBookingsScreen() {
    const { userData } = useAuth();
    const navigation = useNavigation();

    // Mock fetch logic
    const myBookings = MOCK_DB.bookings.filter(b => b.clientId === userData?.id);

    const getMCName = (id) => {
        const user = MOCK_DB.users.find(u => u.id === id);
        return user ? user.name : 'Unknown MC';
    };

    const renderItem = ({ item }) => (
        <AppCard onPress={() => navigation.navigate('BookingDetail', { bookingId: item.id })}>
            <View style={styles.cardHeader}>
                <AppText weight="bold" style={{ flex: 1 }}>{item.eventType}</AppText>
                <StatusBadge status={item.status} />
            </View>
            <AppText color={COLORS.textSecondary} style={{ marginBottom: 4 }}>
                MC: {getMCName(item.mcId)}
            </AppText>
            <AppText color={COLORS.textSecondary} style={{ marginBottom: 4 }}>
                📅 {item.eventDate} | 🕒 {item.startTime}
            </AppText>
            <AppText color={COLORS.success} weight="bold" style={{ marginTop: 8 }}>
                {item.price.toLocaleString('vi-VN')} VNĐ
            </AppText>

            {item.status === 'Completed' && (
                <AppButton
                    title="Đánh giá nhanh"
                    variant="outline"
                    style={styles.reviewBtn}
                    onPress={() => navigation.navigate('PostEventReview', { bookingId: item.id })}
                />
            )}
        </AppCard>
    );

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Lịch Sử Đặt MC" />

            <FlatList
                contentContainerStyle={styles.list}
                data={myBookings}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<EmptyState message="Bạn chưa có lịch đặt nào" />}
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
    reviewBtn: {
        marginTop: SPACING.m,
        paddingVertical: 8,
        height: 40
    }
});
