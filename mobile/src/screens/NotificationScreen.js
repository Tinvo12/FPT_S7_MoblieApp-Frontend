import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { Bell, MessageSquare, Info, ShieldCheck } from 'lucide-react-native';
import AppText from '../components/AppText';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function NotificationScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: '1', title: 'Hồ sơ đã được duyệt', message: 'Tài khoản MC của bạn đã được xác thực chính chủ. Chúc mừng!', type: 'system', date: 'Vừa xong' },
        { id: '2', title: 'Thông báo thanh toán', message: 'Hợp đồng Đám cưới A&B đã được ký quỹ tiền cọc. Hãy bắt đầu chuẩn bị kịch bản.', type: 'payment', date: '2 giờ trước' },
        { id: '3', title: 'Tin nhắn mới', message: 'Khách hàng C vừa gửi cho bạn một tin nhắn. Hãy trả lời ngay.', type: 'message', date: '3 giờ trước' },
        { id: '4', title: 'Nhắc nhở cập nhật', message: 'Vui lòng bổ sung số tài khoản ngân hàng để rút tiền nhanh hơn.', type: 'alert', date: '1 ngày trước' }
    ]);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    const getIcon = (type) => {
        switch (type) {
            case 'system': return <ShieldCheck color={COLORS.success} size={24} />;
            case 'message': return <MessageSquare color={COLORS.info} size={24} />;
            case 'payment': return <Bell color={COLORS.warning} size={24} />;
            default: return <Info color={COLORS.textMuted} size={24} />;
        }
    };

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.brand} />}
        >
            <View style={styles.header}>
                <AppText variant="h2" weight="bold">Thông báo</AppText>
                <AppText color={COLORS.textSecondary}>Bạn có {notifications.length} thông báo mới</AppText>
            </View>

            {notifications.map((notif) => (
                <TouchableOpacity key={notif.id} style={styles.card}>
                    <View style={styles.iconContainer}>
                        {getIcon(notif.type)}
                    </View>
                    <View style={styles.content}>
                        <View style={styles.cardHeader}>
                            <AppText weight="bold" style={styles.cardTitle}>{notif.title}</AppText>
                            <AppText variant="small" color={COLORS.textMuted}>{notif.date}</AppText>
                        </View>
                        <AppText variant="body" color={COLORS.textSecondary} style={styles.cardContent}>
                            {notif.message}
                        </AppText>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    header: {
        marginBottom: SPACING.xl,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    content: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    cardTitle: {
        fontSize: 16,
    },
    cardContent: {
        lineHeight: 20
    },
});

