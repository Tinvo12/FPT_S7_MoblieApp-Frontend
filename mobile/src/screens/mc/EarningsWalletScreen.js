import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

const MOCK_TRANSACTIONS = [
    { id: '1', title: 'Thu nhập MC vòng Escrow - Đám Cưới A&B', amount: 4750000, type: 'IN', date: '12/03/2026' },
    { id: '2', title: 'Rút tiền về Ngân hàng Vietcombank', amount: 2000000, type: 'OUT', date: '10/03/2026' },
];

export default function EarningsWalletScreen() {
    const TransactionRow = ({ item }) => (
        <View style={styles.txRow}>
            <View style={styles.txIconBox}>
                {item.type === 'IN' ? (
                    <ArrowDownRight color={COLORS.success} size={24} />
                ) : (
                    <ArrowUpRight color={COLORS.danger} size={24} />
                )}
            </View>
            <View style={styles.txContent}>
                <AppText weight="bold" numberOfLines={1}>{item.title}</AppText>
                <AppText variant="caption" color={COLORS.textSecondary}>{item.date}</AppText>
            </View>
            <AppText weight="bold" color={item.type === 'IN' ? COLORS.success : COLORS.white}>
                {item.type === 'IN' ? '+' : '-'}{item.amount.toLocaleString()} đ
            </AppText>
        </View>
    );

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Quản Lý Thu Nhập" />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.balanceCard}>
                    <Wallet color={COLORS.brandLight} size={32} style={{ marginBottom: SPACING.s }} />
                    <AppText color={COLORS.textSecondary} style={{ marginBottom: 4 }}>Số Dư Khả Dụng</AppText>
                    <AppText variant="h1" color={COLORS.white}>15,500,000 đ</AppText>

                    <View style={styles.btnGroup}>
                        <AppButton title="Yêu Cầu Rút Tiền" variant="secondary" style={styles.withdrawBtn} />
                    </View>
                </View>

                <AppText variant="h3" style={{ marginBottom: SPACING.m }}>Lịch Sử Biến Động</AppText>
                <View style={styles.historyList}>
                    {MOCK_TRANSACTIONS.map(tx => <TransactionRow key={tx.id} item={tx} />)}
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    balanceCard: {
        backgroundColor: COLORS.brand,
        borderRadius: RADIUS.large,
        padding: SPACING.xl,
        alignItems: 'center',
        marginBottom: SPACING.xl,
        shadowColor: COLORS.brand,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 8,
    },
    btnGroup: {
        flexDirection: 'row',
        marginTop: SPACING.l,
        width: '100%',
    },
    withdrawBtn: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: 'transparent',
    },
    historyList: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    txRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.divider,
    },
    txIconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    txContent: {
        flex: 1,
        paddingRight: SPACING.s,
    }
});
