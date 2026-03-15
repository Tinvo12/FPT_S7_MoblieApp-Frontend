import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import AppText from '../components/AppText';
import AppInput from '../components/AppInput';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function ClientDiscoveryScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [events, setEvents] = useState([
        { id: '1', title: 'Tiệc Tất Niên Công ty ABC', detail: 'Yêu cầu: MC Song ngữ (Anh-Việt). Cát xê: 10M VNĐ. Địa điểm: Hà Nội.', date: '30/12/2026', type: 'Year End' },
        { id: '2', title: 'Hội thảo Công nghệ Blockchain', detail: 'Yêu cầu: Nắm vững thuật ngữ IT. Cát xê: Thỏa thuận. Địa điểm: TP. HCM.', date: '15/10/2026', type: 'Conference' },
        { id: '3', title: 'Lễ Khai Trương Showroom Ô tô', detail: 'Ngoại hình sáng, giọng nói truyền cảm. Cát xê: 15M VNĐ. Địa điểm: Đà Nẵng.', date: '05/11/2026', type: 'Grand Opening' }
    ]);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText variant="h2" weight="bold">Cơ Hội Việc Làm</AppText>
                <AppText color={COLORS.textSecondary}>Tìm kiếm các sự kiện đang cần MC</AppText>
            </View>

            <AppInput
                placeholder="Tìm sự kiện, địa điểm, thể loại..."
                style={styles.searchInput}
            />

            <ScrollView 
                contentContainerStyle={styles.list}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.brand} />}
            >
                {events.map((event) => (
                    <TouchableOpacity key={event.id} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <AppText variant="h3" weight="bold" style={styles.cardTitle}>{event.title}</AppText>
                            <View style={styles.badge}>
                                <AppText variant="caption" color={COLORS.brand}>{event.type}</AppText>
                            </View>
                        </View>
                        <AppText variant="body" color={COLORS.textMuted} style={styles.cardContent}>{event.detail}</AppText>
                        <View style={styles.cardFooter}>
                            <AppText variant="small" color={COLORS.textSecondary}>📅 Hạn chót: {event.date}</AppText>
                            <AppText weight="bold" color={COLORS.brand}>Ứng tuyển ngay</AppText>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    header: {
        marginBottom: SPACING.l,
    },
    searchInput: {
        marginBottom: SPACING.xl,
    },
    list: {
        paddingBottom: 50,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.large,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: SPACING.s,
    },
    cardTitle: {
        flex: 1,
        marginRight: SPACING.s,
    },
    badge: {
        backgroundColor: 'rgba(0, 0, 128, 0.1)',
        paddingHorizontal: SPACING.s,
        paddingVertical: 2,
        borderRadius: RADIUS.small,
    },
    cardContent: {
        lineHeight: 22,
        marginBottom: SPACING.m,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingTop: SPACING.s,
    }
});

