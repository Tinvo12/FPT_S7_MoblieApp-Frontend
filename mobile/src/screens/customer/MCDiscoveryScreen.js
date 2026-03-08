import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { discoverMCs } from '../../services/rankingService';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import MCProfileCard from '../../components/MCProfileCard';
import EmptyState from '../../components/EmptyState';

export default function MCDiscoveryScreen() {
    const navigation = useNavigation();
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        // In real app, consider debouncing this
        handleSearch();
    }, [keyword]);

    const handleSearch = () => {
        const list = discoverMCs({ keyword, sortBy: 'top_trending' });
        setResults(list);
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Khám Phá MC" />

            <View style={styles.searchContainer}>
                <View style={styles.inputWrapper}>
                    <Search size={20} color={COLORS.textSecondary} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm theo tên, kỹ năng, sự kiện..."
                        placeholderTextColor={COLORS.textMuted}
                        value={keyword}
                        onChangeText={setKeyword}
                    />
                </View>
                <View style={styles.filterBtn}>
                    <SlidersHorizontal size={22} color={COLORS.brand} />
                </View>
            </View>

            <FlatList
                data={results}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <MCProfileCard
                        profile={item}
                        onPress={() => navigation.navigate('MCPublicProfile', { profileId: item.id })}
                    />
                )}
                ListEmptyComponent={
                    <EmptyState
                        title="Không tìm thấy MC"
                        message="Hãy thử đổi từ khóa tìm kiếm hoặc bộ lọc."
                    />
                }
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        paddingHorizontal: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginRight: SPACING.xs,
    },
    searchInput: {
        flex: 1,
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.s,
        color: COLORS.white,
        fontSize: 16,
    },
    filterBtn: {
        width: 52,
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        borderWidth: 1,
        borderColor: COLORS.brand,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        padding: SPACING.m,
        paddingBottom: 100, // accommodate bottom tab
    }
});
