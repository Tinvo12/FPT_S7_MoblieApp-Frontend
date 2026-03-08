import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Mic, Search, Star, MessageSquare } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { useAuth } from '../../hooks/useAuth';
import { getTopRankingMCs } from '../../services/rankingService';

import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import Avatar from '../../components/Avatar';
import MCProfileCard from '../../components/MCProfileCard';
import LoadingState from '../../components/LoadingState';

export default function CustomerHomeScreen() {
    const { userData } = useAuth();
    const navigation = useNavigation();
    const [topMcs, setTopMcs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        // Simulate network latency
        setTopMcs(getTopRankingMCs().slice(0, 3));
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    return (
        <AppScreen useSafeArea>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.brand} />}
            >
                <View style={styles.header}>
                    <View>
                        <AppText variant="subtitle">Xin chào,</AppText>
                        <AppText variant="h2">{userData?.name || 'Khách'}</AppText>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TabProfile')}>
                        <Avatar src={userData?.avatar} size={50} />
                    </TouchableOpacity>
                </View>

                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    <TouchableOpacity
                        style={styles.actionItem}
                        onPress={() => navigation.navigate('TabDiscovery')}
                    >
                        <View style={[styles.iconBox, { backgroundColor: 'rgba(0,0,128,0.2)' }]}>
                            <Search color={COLORS.brand} size={28} />
                        </View>
                        <AppText variant="caption" weight="medium" style={styles.actionText}>Tìm MC</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionItem}
                        onPress={() => navigation.navigate('TabBookings')}
                    >
                        <View style={[styles.iconBox, { backgroundColor: 'rgba(0,230,118,0.2)' }]}>
                            <Star color={COLORS.success} size={28} />
                        </View>
                        <AppText variant="caption" weight="medium" style={styles.actionText}>Lịch Đặt</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionItem}
                        onPress={() => navigation.navigate('Messaging', { chatId: 'all' })}
                    >
                        <View style={[styles.iconBox, { backgroundColor: 'rgba(255,204,0,0.2)' }]}>
                            <MessageSquare color={COLORS.warning} size={28} />
                        </View>
                        <AppText variant="caption" weight="medium" style={styles.actionText}>Tin Nhắn</AppText>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <AppText variant="h3">MC Nổi Bật Tốt Nhất</AppText>
                        <TouchableOpacity onPress={() => navigation.navigate('TabDiscovery')}>
                            <AppText color={COLORS.brand} weight="bold">Xem tất cả</AppText>
                        </TouchableOpacity>
                    </View>

                    {topMcs.length === 0 ? <LoadingState message="" /> : (
                        topMcs.map((mc) => (
                            <MCProfileCard
                                key={mc.id}
                                profile={mc}
                                onPress={() => navigation.navigate('MCPublicProfile', { profileId: mc.id })}
                            />
                        ))
                    )}
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
        paddingBottom: SPACING.xxl,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
        paddingTop: SPACING.s,
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: SPACING.xl,
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.large,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    actionItem: {
        alignItems: 'center',
    },
    iconBox: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    actionText: {
        color: '#ccc',
    },
    section: {
        marginBottom: SPACING.l,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.m,
    }
});
