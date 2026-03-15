import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, RefreshControl } from 'react-native';
import AppText from '../components/AppText';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { getMyBookings } from '../api/bookingService';
import { AuthContext } from '../context/AuthContext';

export default function MyBookingsScreen({ navigation }) {
    const { userData } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        if (!userData?.id) {
            setLoading(false);
            return;
        }
        try {
            const role = userData.role || 'client';
            const result = await getMyBookings(userData.id, role);
            if (result.status === 'success') {
                setBookings(result.data.bookings);
            }
        } catch (error) {
            console.error('Fetch bookings error:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, [userData]);

    const onRefresh = () => {
        setRefreshing(true);
        fetchBookings();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return COLORS.warning;
            case 'Confirmed': return COLORS.brand;
            case 'Completed': return COLORS.success;
            case 'Cancelled': return COLORS.danger;
            default: return COLORS.textMuted;
        }
    };

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={COLORS.brand} />
            </View>
        );
    }

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.brand} />}
        >
            <AppText variant="h2" weight="bold" style={styles.title}>Lịch Của Tôi</AppText>

            {bookings.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <AppText color={COLORS.textMuted}>Bạn chưa có lịch hẹn nào.</AppText>
                </View>
            ) : (
                bookings.map((booking) => (
                    <TouchableOpacity 
                        key={booking._id} 
                        style={styles.card}
                        onPress={() => navigation.navigate('Messaging', { bookingId: booking._id })}
                    >
                        <View style={styles.cardHeader}>
                            <AppText variant="h3" weight="bold">{booking.eventName || 'Sự kiện không tên'}</AppText>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) }]}>
                                <AppText variant="small" weight="bold" color={COLORS.white}>{booking.status}</AppText>
                            </View>
                        </View>
                        
                        <AppText style={styles.cardDetail} color={COLORS.textSecondary}>
                            📅 Ngày: {new Date(booking.date).toLocaleDateString()}
                        </AppText>
                        <AppText style={styles.cardDetail} color={COLORS.textSecondary}>
                            👤 Đối tác: {userData.role === 'mc' ? (booking.client?.name || 'Khách hàng') : (booking.mc?.name || 'MC')}
                        </AppText>
                        
                        <View style={styles.cardFooter}>
                            <AppText weight="bold" color={COLORS.brand}>Xem chi tiết & Chat</AppText>
                        </View>
                    </TouchableOpacity>
                ))
            )}

            {/* Mock data for demonstration if empty */}
            {bookings.length === 0 && (
                <>
                <AppText variant="small" color={COLORS.textMuted} style={styles.sectionLabel}>DEMO DATA:</AppText>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <AppText variant="h3" weight="bold">Đám Cưới A & B</AppText>
                        <View style={[styles.statusBadge, { backgroundColor: COLORS.success }]}>
                            <AppText variant="small" weight="bold" color={COLORS.white}>Completed</AppText>
                        </View>
                    </View>
                    <AppText style={styles.cardDetail} color={COLORS.textSecondary}>📅 Ngày: 12/03/2026</AppText>
                    <AppText style={styles.cardDetail} color={COLORS.textSecondary}>👤 Đối tác: Nguyễn Thị C</AppText>
                </View>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    title: {
        marginBottom: SPACING.l,
    },
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: SPACING.xl,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.brand,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    statusBadge: {
        paddingHorizontal: SPACING.s,
        paddingVertical: 2,
        borderRadius: RADIUS.small,
    },
    cardDetail: {
        marginBottom: 2,
    },
    cardFooter: {
        marginTop: SPACING.m,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingTop: SPACING.s,
        alignItems: 'flex-end',
    },
    sectionLabel: {
        marginTop: SPACING.xl,
        marginBottom: SPACING.s,
    }
});
