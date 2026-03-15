import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import { ROLES } from '../constants/roles';

export default function DashboardScreen({ navigation }) {
    const { userData } = useContext(AuthContext);
    const isMC = userData?.role === ROLES.MC || userData?.role === 'mc';

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <AppText variant="h1" weight="bold" style={styles.welcomeText}>
                    Xin chào, {userData?.name || (isMC ? 'MC' : 'Người dùng')}!
                </AppText>
                <AppText variant="body" color={COLORS.textSecondary} style={styles.subtitle}>
                    {isMC ? 'Quản lý lịch diễn và thù lao của bạn' : 'Tìm kiếm và đặt lịch MC cho sự kiện'}
                </AppText>
            </View>

            {isMC ? (
                // MC DASHBOARD VIEW
                <>
                    <View style={styles.card}>
                        <AppText variant="h3" weight="bold" style={styles.cardTitle}>Sự kiện sắp tới</AppText>
                        <AppText variant="body" color={COLORS.textMuted}>Bạn có 2 lịch hẹn đang chờ trong tuần này.</AppText>
                    </View>

                    <AppButton 
                        title="Lịch Sự Kiện Của Tôi" 
                        onPress={() => navigation.navigate('MyBookings')} 
                        style={styles.navButton}
                    />

                    <AppButton 
                        title="Ví & Thu Nhập" 
                        onPress={() => navigation.navigate('EarningsWallet')} 
                        style={styles.navButton}
                    />

                    <AppText variant="h3" weight="bold" style={styles.navSection}>Công cụ MC</AppText>
                    <View style={styles.grid}>
                        <AppButton title="Tìm Sự Kiện" variant="secondary" onPress={() => navigation.navigate('ClientDiscovery')} style={styles.gridItem} />
                        <AppButton title="Thư Viện KB" variant="secondary" onPress={() => navigation.navigate('ScriptLibrary')} style={styles.gridItem} />
                        <AppButton title="Tin Nhắn" variant="secondary" onPress={() => navigation.navigate('Messaging')} style={styles.gridItem} />
                        <AppButton title="Hồ Sơ" variant="secondary" onPress={() => navigation.navigate('MCPublicProfile')} style={styles.gridItem} />
                    </View>
                </>
            ) : (
                // CLIENT DASHBOARD VIEW
                <>
                    <AppButton 
                        title="Khám Phá MC Ngay" 
                        onPress={() => navigation.navigate('MCDiscovery')} 
                        style={styles.mainActionButton}
                    />

                    <View style={styles.card}>
                        <AppText variant="h3" weight="bold" style={styles.cardTitle}>Trạng thái đặt lịch</AppText>
                        <AppText variant="body" color={COLORS.textMuted}>Theo dõi các yêu cầu đặt MC của bạn.</AppText>
                    </View>

                    <AppButton 
                        title="Lịch Đặt Của Tôi" 
                        variant="secondary"
                        onPress={() => navigation.navigate('MyBookings')} 
                        style={styles.navButton}
                    />

                    <View style={styles.grid}>
                        <AppButton title="Tin Nhắn" variant="secondary" onPress={() => navigation.navigate('Messaging')} style={styles.gridItem} />
                        <AppButton title="Thông Báo" variant="secondary" onPress={() => navigation.navigate('Notification')} style={styles.gridItem} />
                    </View>
                </>
            )}

            <AppButton 
                title="Cài Đặt & Tài Khoản" 
                variant="outline"
                onPress={() => navigation.navigate('Settings')} 
                style={styles.settingsButton}
            />
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
    welcomeText: {
        marginBottom: SPACING.xs,
    },
    subtitle: {
        marginBottom: SPACING.s,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.brand
    },
    cardTitle: {
        marginBottom: SPACING.s,
    },
    navSection: {
        marginTop: SPACING.m,
        marginBottom: SPACING.m
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: SPACING.m
    },
    gridItem: {
        width: '48%',
        marginBottom: SPACING.m,
    },
    navButton: {
        marginBottom: SPACING.m
    },
    mainActionButton: {
        marginBottom: SPACING.xl,
        paddingVertical: SPACING.l,
    },
    settingsButton: {
        marginTop: SPACING.m,
        marginBottom: 50,
    }
});
