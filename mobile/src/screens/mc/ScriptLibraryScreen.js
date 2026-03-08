import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Search, ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import TagChip from '../../components/TagChip';

const MOCK_SCRIPTS = [
    { id: '1', title: 'Khai Trương Cửa Hàng (Mẫu Truyền Thống)', category: 'Khai Trương', duration: '15p' },
    { id: '2', title: 'Year End Party (Năng động, Gen Z)', category: 'YEP', duration: '40p' },
    { id: '3', title: 'Mẫu Kịch Bản Đám Cưới 3 Miền', category: 'Lễ Cưới', duration: '30p' },
];

export default function ScriptLibraryScreen() {
    const navigation = useNavigation();
    const [keyword, setKeyword] = useState('');

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Kho Kịch Bản MCHub" />

            <View style={styles.searchContainer}>
                <View style={styles.inputWrapper}>
                    <Search size={20} color={COLORS.textSecondary} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm mẫu kịch bản..."
                        placeholderTextColor={COLORS.textMuted}
                        value={keyword}
                        onChangeText={setKeyword}
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                {MOCK_SCRIPTS.map(script => (
                    <TouchableOpacity
                        key={script.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('ScriptReader', { scriptId: script.id, title: script.title })}
                    >
                        <View style={styles.cardContent}>
                            <AppText weight="bold" style={{ marginBottom: 4 }}>{script.title}</AppText>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <TagChip label={script.category} variant="brand" />
                                <AppText variant="caption" color={COLORS.textMuted} style={{ marginLeft: 8 }}>
                                    ~ Tương đương {script.duration} đọc
                                </AppText>
                            </View>
                        </View>
                        <ChevronRight color={COLORS.textMuted} size={20} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        padding: SPACING.m,
        backgroundColor: COLORS.surface,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        borderRadius: RADIUS.medium,
        paddingHorizontal: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    searchInput: {
        flex: 1,
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.s,
        color: COLORS.white,
        fontSize: 16,
    },
    container: {
        padding: SPACING.m,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    cardContent: {
        flex: 1,
    }
});
