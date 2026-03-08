import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { BellRing, CalendarDays } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppCard from '../../components/AppCard';
import EmptyState from '../../components/EmptyState';

// Quick Mock Notifications
const MOCK_NOTIFS = [
    { id: '1', title: 'Booking Confirm', body: 'MC Quang Minh đã xác nhận lịch sự kiện của bạn.', type: 'booking', isRead: false },
    { id: '2', title: 'System', body: 'Chào mừng bạn tham gia MCHub!', type: 'system', isRead: true }
];

export default function NotificationsScreen() {

    const renderItem = ({ item }) => (
        <AppCard style={[styles.notifCard, !item.isRead && styles.unread]}>
            <View style={styles.iconBox}>
                {item.type === 'booking' ? <CalendarDays color={COLORS.brand} size={20} /> : <BellRing color={COLORS.warning} size={20} />}
            </View>
            <View style={styles.contentBox}>
                <AppText weight={!item.isRead ? 'bold' : 'regular'} color={COLORS.white}>{item.title}</AppText>
                <AppText variant="caption" color={COLORS.textSecondary} style={{ marginTop: 4 }}>{item.body}</AppText>
            </View>
        </AppCard>
    );

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Thông Báo" showBackBtn />

            <FlatList
                contentContainerStyle={styles.list}
                data={MOCK_NOTIFS}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<EmptyState message="Chưa có thông báo nào" />}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    list: { padding: SPACING.m },
    notifCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.m
    },
    unread: {
        borderColor: COLORS.brand,
        backgroundColor: 'rgba(0,0,128,0.1)'
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m
    },
    contentBox: {
        flex: 1
    }
});
