import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MOCK_DB } from '../../data/mockDatabase';
import { UserCheck, UserX, UserSearch } from 'lucide-react-native';

import { COLORS, SPACING } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppCard from '../../components/AppCard';
import Avatar from '../../components/Avatar';

export default function UserManagementScreen() {
    const allUsers = MOCK_DB.users;

    const renderUser = ({ item }) => {
        let cardColor = COLORS.surface;
        if (item.role === 'ADMIN') cardColor = 'rgba(255, 68, 68, 0.1)';

        return (
            <AppCard style={[styles.card, { backgroundColor: cardColor }]}>
                <View style={styles.cardHeader}>
                    <Avatar src={item.avatar} size={40} isVerified={item.isVerified} />
                    <View style={styles.infoCol}>
                        <AppText weight="bold" color={COLORS.white}>{item.name}</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>{item.email}</AppText>
                    </View>
                    <View style={styles.roleBadge}>
                        <AppText variant="caption" weight="bold" color={COLORS.brand}>{item.role}</AppText>
                    </View>
                </View>

                {item.role === 'MC' && (
                    <View style={styles.actionRow}>
                        {!item.isVerified ? (
                            <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.success }]}>
                                <UserCheck color={COLORS.bg} size={16} />
                                <AppText variant="caption" color={COLORS.background} weight="bold" style={{ marginLeft: 4 }}>Verify MC</AppText>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.warning }]}>
                                <UserSearch color={COLORS.background} size={16} />
                                <AppText variant="caption" color={COLORS.background} weight="bold" style={{ marginLeft: 4 }}>Remove Verify</AppText>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.danger, marginLeft: SPACING.s }]}>
                            <UserX color={COLORS.bg} size={16} />
                            <AppText variant="caption" color={COLORS.white} weight="bold" style={{ marginLeft: 4 }}>Khóa</AppText>
                        </TouchableOpacity>
                    </View>
                )}
            </AppCard>
        );
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Quản Lý Tài Khoản" showBackBtn={false} />

            <FlatList
                data={allUsers}
                renderItem={renderUser}
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
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.m,
    },
    infoCol: {
        flex: 1,
        marginLeft: SPACING.m,
    },
    roleBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(0,0,128,0.2)',
        borderRadius: 12,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingTop: SPACING.m,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
        paddingVertical: 6,
        borderRadius: 16,
    }
});
