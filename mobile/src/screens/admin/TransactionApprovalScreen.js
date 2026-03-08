import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MOCK_DB } from '../../data/mockDatabase';
import { ShieldCheck, Crosshair } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppCard from '../../components/AppCard';
import StatusBadge from '../../components/StatusBadge';

export default function TransactionApprovalScreen() {
    const transactions = MOCK_DB.bookings.map(b => ({
        id: b.id,
        event: b.eventType,
        mcId: b.mcId,
        amount: b.price * 0.95, // After 5% fee cut
        paymentStatus: b.paymentStatus
    }));

    const renderItem = ({ item }) => (
        <AppCard style={styles.card}>
            <View style={styles.topRow}>
                <AppText weight="bold" style={{ flex: 1 }} numberOfLines={1}>Rút tiền: {item.event}</AppText>
                <StatusBadge status={item.paymentStatus} />
            </View>

            <View style={styles.amountBox}>
                <AppText color={COLORS.textSecondary}>Yêu cầu từ ví MC:</AppText>
                <AppText variant="h3" color={COLORS.brandLight}>{item.amount.toLocaleString('vi-VN')} đ</AppText>
            </View>

            {item.paymentStatus !== 'FullyPaid' && (
                <View style={styles.actionRow}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.success }]}>
                        <ShieldCheck color={COLORS.background} size={16} />
                        <AppText variant="caption" color={COLORS.background} weight="bold" style={{ marginLeft: 4 }}>Duyệt Lệnh</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.danger, marginLeft: SPACING.s }]}>
                        <Crosshair color={COLORS.white} size={16} />
                        <AppText variant="caption" color={COLORS.white} weight="bold" style={{ marginLeft: 4 }}>Chặn (Có Biến)</AppText>
                    </TouchableOpacity>
                </View>
            )}
        </AppCard>
    );

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Kiểm Duyệt Giao Dịch" showBackBtn={false} />

            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={i => i.id}
                contentContainerStyle={{ padding: SPACING.m }}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: SPACING.m,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    amountBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SPACING.s,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.border,
        marginBottom: SPACING.m,
    },
    actionRow: {
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: RADIUS.medium,
    }
});
