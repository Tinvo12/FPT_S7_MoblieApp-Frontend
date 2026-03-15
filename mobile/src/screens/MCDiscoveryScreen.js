import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import AppText from '../components/AppText';
import AppInput from '../components/AppInput';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import apiClient from '../api/client';

export default function MCDiscoveryScreen({ navigation }) {
    const [mcs, setMcs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchMCs();
    }, []);

    const fetchMCs = async () => {
        try {
            // API call to backend service
            const response = await apiClient.get('/mcs');
            if (response.data.status === 'success') {
                setMcs(response.data.data.profiles);
            }
        } catch (error) {
            console.error('Fetch MCs error:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredMCs = mcs.filter(mc => 
        mc.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mc.specialties?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText variant="h2" weight="bold">Khám Phá MC</AppText>
                <AppText color={COLORS.textSecondary}>Tìm kiếm MC phù hợp cho sự kiện của bạn</AppText>
            </View>

            <AppInput
                placeholder="Tìm tên MC, phong cách, sự kiện..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.searchInput}
            />

            {loading ? (
                <ActivityIndicator size="large" color={COLORS.brand} style={{ marginTop: 50 }} />
            ) : (
                <ScrollView contentContainerStyle={styles.list}>
                    {filteredMCs.length === 0 ? (
                        <AppText style={styles.emptyText} color={COLORS.textMuted}>Không tìm thấy MC phù hợp.</AppText>
                    ) : (
                        filteredMCs.map((mc) => (
                            <TouchableOpacity 
                                key={mc._id} 
                                style={styles.mcCard}
                                onPress={() => navigation.navigate('MCPublicProfile', { profileId: mc._id })}
                            >
                                <Image source={{ uri: mc.user?.avatar || 'https://via.placeholder.com/150' }} style={styles.avatar} />
                                <View style={styles.info}>
                                    <AppText variant="h3" weight="bold">{mc.user?.name}</AppText>
                                    <AppText variant="small" color={COLORS.brandLight}>{mc.eventTypes?.join(', ')}</AppText>
                                    <View style={styles.footer}>
                                        <AppText weight="bold" color={COLORS.success}>
                                            {mc.rates?.min?.toLocaleString()} VNĐ
                                        </AppText>
                                        <AppText variant="small" color={COLORS.textMuted}>⭐ {mc.rating || 'N/A'}</AppText>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    )}
                    
                    {/* Mock data if no results from backend */}
                    {filteredMCs.length === 0 && searchQuery === '' && (
                        <>
                        <TouchableOpacity style={styles.mcCard}>
                            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
                            <View style={styles.info}>
                                <AppText variant="h3" weight="bold">MC Quang Minh</AppText>
                                <AppText variant="small" color={COLORS.brandLight}>Tiệc cưới, Hội thảo</AppText>
                                <View style={styles.footer}>
                                    <AppText weight="bold" color={COLORS.success}>5,000,000 VNĐ</AppText>
                                    <AppText variant="small" color={COLORS.textMuted}>⭐ 4.9</AppText>
                                </View>
                            </View>
                        </TouchableOpacity>
                        </>
                    )}
                </ScrollView>
            )}
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
    mcCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.large,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: RADIUS.medium,
        marginRight: SPACING.m,
    },
    info: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.s,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
    }
});
