import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ShieldCheck } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { getMCById } from '../../services/rankingService';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

export default function BookingCheckoutScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { profileId, bookingData } = route.params || {};

    const mc = getMCById(profileId);
    const [loading, setLoading] = useState(false);

    const budgetNum = parseInt(bookingData?.budget?.replace(/[^0-9]/g, ''), 10) || 0;
    const platformFee = budgetNum * 0.05; // 5% platform fee
    const total = budgetNum + platformFee;

    const handleEscrowPayment = () => {
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            Alert.alert(
                "Chốt Lịch Thành Công!",
                "Tiền của bạn đang được giữ an toàn trên hệ thống. MC sẽ nhận được thông báo để xác nhận.",
                [{ text: "Quay về Trang Chủ", onPress: () => navigation.navigate('TabHome') }]
            );
        }, 1500);
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Thanh Toán An Toàn" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.escrowBanner}>
                    <ShieldCheck size={36} color={COLORS.success} />
                    <AppText variant="subtitle" align="center" style={{ marginTop: SPACING.s, lineHeight: 22 }}>
                        Hệ thống MCHub Escrow sẽ giữ tiền của bạn cho đến khi sự kiện hoàn tất và bạn xác nhận.
                    </AppText>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.title}>Chi tiết sự kiện</AppText>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>MC:</AppText><AppText weight="bold">{mc?.mcUser?.name}</AppText></View>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Ngày:</AppText><AppText>{bookingData?.eventDate}</AppText></View>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Loại H/Đ:</AppText><AppText>{bookingData?.eventType}</AppText></View>
                    <View style={styles.row}><AppText color={COLORS.textSecondary}>Địa điểm:</AppText><AppText>{bookingData?.location}</AppText></View>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.title}>Tổng Kết Chi Phí</AppText>
                    <View style={styles.row}>
                        <AppText color={COLORS.textSecondary}>Phí MC (Đề xuất):</AppText>
                        <AppText>{budgetNum.toLocaleString('vi-VN')} đ</AppText>
                    </View>
                    <View style={styles.row}>
                        <AppText color={COLORS.textSecondary}>Phí Nền Tảng (5%):</AppText>
                        <AppText>{platformFee.toLocaleString('vi-VN')} đ</AppText>
                    </View>
                    <View style={[styles.row, { borderTopWidth: 1, borderColor: '#333', marginTop: SPACING.s, paddingTop: SPACING.s }]}>
                        <AppText variant="h3">TỔNG CỘNG:</AppText>
                        <AppText variant="h3" color={COLORS.success}>
                            {total.toLocaleString('vi-VN')} đ
                        </AppText>
                    </View>
                </View>

                <AppButton
                    title="Thanh toán qua MCHub Pay"
                    onPress={handleEscrowPayment}
                    loading={loading}
                />
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    escrowBanner: {
        backgroundColor: 'rgba(0,230,118,0.1)',
        borderRadius: RADIUS.medium,
        padding: SPACING.l,
        alignItems: 'center',
        marginBottom: SPACING.l,
        borderWidth: 1,
        borderColor: 'rgba(0,230,118,0.3)'
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
