import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MOCK_DB } from '../../data/mockDatabase';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import StatusBadge from '../../components/StatusBadge';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppButton from '../../components/AppButton';

export default function BookingDetailScreen() {
    const route = useRoute();
    const bookingId = route.params?.bookingId;
    const booking = MOCK_DB.bookings.find(b => b.id === bookingId);
    const mc = MOCK_DB.users.find(u => u.id === booking?.mcId);

    if (!booking) return null;

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Chi Tiết Lịch Đặt" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.cardHeader}>
                    <AppText variant="h2">{booking.eventType}</AppText>
                    <StatusBadge status={booking.status} style={{ marginTop: 8 }} />
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.title}>Thông tin Event</AppText>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Ngày:</AppText><AppText>{booking.eventDate}</AppText></View>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Giờ:</AppText><AppText>{booking.startTime} - {booking.endTime}</AppText></View>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Địa điểm:</AppText><AppText>{booking.location}</AppText></View>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.title}>Báo giá & Thanh toán</AppText>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Cát-xê MC:</AppText><AppText>{booking.price.toLocaleString()} đ</AppText></View>
                    <View style={styles.row}>
                        <AppText color={COLORS.textSecondary}>Thanh Toán:</AppText>
                        <AppText color={COLORS.success} weight="bold">{booking.paymentStatus === 'FullyPaid' ? 'Đã Thanh Toán Toàn Bộ' : 'Đã Giữ Escrow'}</AppText>
                    </View>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.title}>Sự Cố & Xử Lý</AppText>
                    <AppText color={COLORS.textSecondary} style={{ lineHeight: 22 }}>
                        Mọi khoản tiền đang được bảo vệ bởi MCHub Escrow. Nếu có bất kỳ sự cố nào xảy ra, vui lòng liên hệ hệ thống quản lý.
                    </AppText>
                    <AppButton title="Yêu cầu hỗ trợ ngay" variant="secondary" style={{ marginTop: SPACING.m }} />
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: { padding: SPACING.m },
    cardHeader: {
        backgroundColor: COLORS.surface,
        padding: SPACING.xl,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: 'center'
    },
    card: {
        backgroundColor: COLORS.surface,
        padding: SPACING.l,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    title: {
        color: COLORS.brand,
        marginBottom: SPACING.m,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.s
    }
});
