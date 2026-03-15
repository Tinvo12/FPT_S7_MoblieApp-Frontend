import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { createPayment } from '../api/paymentService';
import { AuthContext } from '../context/AuthContext';

export default function BookingCheckoutScreen({ navigation, route }) {
    const { userData } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    // Dữ liệu giả định hoặc lấy từ route params
    const bookingDetails = route.params?.booking || {
        id: 'bk_123',
        mcName: 'Trần Văn A',
        eventName: 'Hội Thảo Y Khoa Cấp Cao',
        date: '25/08/2026',
        amount: 20000000,
        fee: 1000000
    };

    const handlePayment = async () => {
        setLoading(true);
        try {
            const paymentData = {
                booking: bookingDetails.id,
                client: userData?.id,
                mc: bookingDetails.mcId || 'mc_001',
                amount: bookingDetails.amount + bookingDetails.fee,
                status: 'Completed', // Giả định thanh toán thành công ngay
                type: 'Escrow'
            };

            await createPayment(paymentData);
            
            Alert.alert('Thành công', 'Thanh toán thành công. Tiền đã được ký quỹ an toàn.');
            navigation.navigate('Success');
        } catch (error) {
            console.error(error);
            Alert.alert('Lỗi', 'Không thể thực hiện thanh toán. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Checkout & Escrow</AppText>

            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>Thông Tin Đặt MC</AppText>
                <AppText style={styles.rowText} color={COLORS.textSecondary}>- Tên MC: {bookingDetails.mcName}</AppText>
                <AppText style={styles.rowText} color={COLORS.textSecondary}>- Sự Kiện: {bookingDetails.eventName}</AppText>
                <AppText style={styles.rowText} color={COLORS.textSecondary}>- Ngày: {bookingDetails.date}</AppText>
            </View>
            <View style={styles.card}>
                <AppText variant="h3" weight="bold" style={styles.cardTitle}>Chi Tiết Thanh Toán (Escrow)</AppText>
                <AppText style={styles.rowText} color={COLORS.textSecondary}>Phí MC: {bookingDetails.amount.toLocaleString()} VNĐ</AppText>
                <AppText style={styles.rowText} color={COLORS.textSecondary}>Phí Nền Tảng: {bookingDetails.fee.toLocaleString()} VNĐ</AppText>
                <AppText weight="bold" color={COLORS.success} style={[styles.rowText, styles.totalText]}>
                    Tổng Cộng: {(bookingDetails.amount + bookingDetails.fee).toLocaleString()} VNĐ
                </AppText>
            </View>

            <AppButton 
                title="Thanh Toán An Toàn Qua MCHud (Giữ Tiền)" 
                onPress={handlePayment} 
                loading={loading}
                disabled={loading}
                style={styles.payBtn} 
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    title: {
        marginBottom: SPACING.m,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.brand
    },
    cardTitle: {
        marginBottom: SPACING.m,
    },
    rowText: {
        marginBottom: SPACING.s,
    },
    totalText: {
        marginTop: SPACING.s,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingTop: SPACING.s
    },
    payBtn: {
        marginTop: SPACING.m
    }
});
