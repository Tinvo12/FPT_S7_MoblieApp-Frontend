import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { getPaymentHistory } from '../api/paymentService';
import { AuthContext } from '../context/AuthContext';

export default function EarningsWalletScreen() {
    const { userData } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(15500000); // Default if no data

    useEffect(() => {
        const fetchHistory = async () => {
            if (!userData?.id) {
                setLoading(false);
                return;
            }
            try {
                const result = await getPaymentHistory(userData.id);
                if (result.status === 'success') {
                    setTransactions(result.data.transactions);
                    // Giả định tính toán cân đối từ transactions
                    // let total = result.data.transactions.reduce(...);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [userData]);

    const handleWithdraw = () => {
        Alert.alert(
            'Yêu cầu rút tiền',
            'Hệ thống sẽ xử lý yêu cầu của bạn trong vòng 24h. Bạn có chắc chắn muốn rút toàn bộ số dư?',
            [
                { text: 'Hủy', style: 'cancel' },
                { text: 'Đồng ý', onPress: () => Alert.alert('Thành công', 'Đã gửii yêu cầu!') }
            ]
        );
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.centered]}>
                <ActivityIndicator size="large" color={COLORS.brand} />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Thu Nhập & Ví</AppText>

            <View style={styles.balanceCard}>
                <AppText color={COLORS.textSecondary} style={styles.balanceLabel}>Số Dư Khả Dụng</AppText>
                <AppText variant="title" weight="bold" color={COLORS.white} style={styles.balanceAmout}>
                    {balance.toLocaleString()} VNĐ
                </AppText>
                <AppButton 
                    title="Yêu cầu Rút Tiền" 
                    variant="secondary" 
                    onPress={handleWithdraw}
                    style={styles.withdrawBtn} 
                />
            </View>

            <AppText variant="h3" weight="bold" style={styles.historyTitle}>Lịch Sử Giao Dịch</AppText>
            
            {transactions.length === 0 ? (
                <AppText style={styles.emptyText} color={COLORS.textMuted}>Chưa có giao dịch nào.</AppText>
            ) : (
                transactions.map((item) => (
                    <View key={item._id} style={styles.card}>
                        <AppText variant="h3" weight="bold" color={item.type === 'Withdrawal' ? COLORS.danger : COLORS.success} style={styles.cardTitle}>
                            {item.type === 'Withdrawal' ? '-' : '+'} {item.amount.toLocaleString()} VNĐ
                        </AppText>
                        <AppText variant="body" color={COLORS.textMuted}>
                            {item.status}: {item.booking?.eventName || 'Giao dịch hệ thống'} ({new Date(item.createdAt).toLocaleDateString()})
                        </AppText>
                    </View>
                ))
            )}
            
            {/* Fallback static data if mock mode and no server records */}
            {transactions.length === 0 && (
                <>
                <View style={styles.card}>
                    <AppText variant="h3" weight="bold" color={COLORS.success} style={styles.cardTitle}>+ 5,000,000 VNĐ</AppText>
                    <AppText variant="body" color={COLORS.textMuted}>Thanh toán Escrow: Đám Cưới A&B (12/03/2026)</AppText>
                </View>
                <View style={styles.card}>
                    <AppText variant="h3" weight="bold" color={COLORS.danger} style={styles.cardTitle}>- 500,000 VNĐ</AppText>
                    <AppText variant="body" color={COLORS.textMuted}>Phí nền tảng MCHud (Tháng 2)</AppText>
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
    title: {
        marginBottom: SPACING.m,
    },
    balanceCard: {
        backgroundColor: COLORS.brand,
        borderRadius: RADIUS.medium,
        padding: SPACING.xl,
        alignItems: 'center',
        marginBottom: SPACING.xl
    },
    balanceLabel: {
        marginBottom: SPACING.s
    },
    balanceAmout: {
        marginBottom: SPACING.m
    },
    withdrawBtn: {
        paddingHorizontal: SPACING.l,
        paddingVertical: SPACING.s,
    },
    historyTitle: {
        marginBottom: SPACING.m
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.m,
    },
    cardTitle: {
        marginBottom: SPACING.s,
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: SPACING.xl,
    }
});
