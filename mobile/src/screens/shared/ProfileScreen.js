import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { LogOut, Settings, CreditCard, ChevronRight, UserCircle } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { useAuth } from '../../hooks/useAuth';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import Avatar from '../../components/Avatar';
import AppCard from '../../components/AppCard';

export default function ProfileScreen() {
    const { userData, logout } = useAuth();

    const handleLogout = () => {
        Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn thoát tài khoản?', [
            { text: 'Hủy' },
            { text: 'Đăng xuất', onPress: () => logout(), style: 'destructive' }
        ]);
    };

    const OptionRow = ({ icon: Icon, title, onPress }) => (
        <AppCard onPress={onPress} style={styles.optionRow}>
            <Icon color={COLORS.textSecondary} size={24} />
            <AppText style={styles.optionText}>{title}</AppText>
            <ChevronRight color={COLORS.textMuted} size={20} />
        </AppCard>
    );

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Tài Khoản" />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerInfo}>
                    <Avatar src={userData?.avatar} size={80} style={{ marginBottom: SPACING.m }} />
                    <AppText variant="h2">{userData?.name}</AppText>
                    <AppText color={COLORS.textSecondary}>{userData?.email}</AppText>
                    <AppText variant="caption" color={COLORS.brand} weight="bold" style={{ marginTop: 8 }}>
                        {userData?.role === 'MC' ? 'Tài Khoản MC' : (userData?.role === 'CUSTOMER' ? 'Khách Hàng' : 'Quản Trị Viên')}
                    </AppText>
                </View>

                <View style={styles.section}>
                    <AppText variant="subtitle" style={styles.sectionTitle}>Chung</AppText>
                    <OptionRow icon={UserCircle} title="Sửa Hồ Sơ Của Tôi" />
                    <OptionRow icon={CreditCard} title="Quản Lý Thanh Toán" />
                    <OptionRow icon={Settings} title="Cài Đặt Hệ Thống" />
                </View>

                <AppButton
                    title="Đăng Xuất"
                    variant="danger"
                    onPress={handleLogout}
                    style={{ marginTop: SPACING.xxl }}
                />
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: { padding: SPACING.m, paddingBottom: 100 },
    headerInfo: {
        alignItems: 'center',
        padding: SPACING.xl,
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.large,
        marginBottom: SPACING.xl,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    section: {
        marginBottom: SPACING.l
    },
    sectionTitle: {
        marginBottom: SPACING.s,
        marginLeft: SPACING.xs
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.s
    },
    optionText: {
        flex: 1,
        marginLeft: SPACING.m,
        fontSize: 16
    }
});
