import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { logout } from '../api/authService';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

export default function SettingsScreen({ navigation }) {

    const handleLogout = async () => {
        // Thực hiện wipe store token
        await logout();
        Alert.alert('Đăng xuất', 'Bạn đã đăng xuất khỏi MCHud');
        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <AppText variant="h2" weight="bold" style={styles.title}>Cài Đặt Hệ Thống</AppText>

            <TouchableOpacity style={styles.listItem}>
                <AppText style={styles.listText}>Chi tiết hồ sơ Profile (MC Public Profile)</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <AppText style={styles.listText}>Cấu hình bảo mật</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <AppText style={styles.listText}>Thông báo (Notification Center)</AppText>
            </TouchableOpacity>

            <AppButton 
                title="Đăng Xuất" 
                variant="danger" 
                onPress={handleLogout} 
                style={styles.logoutButton} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    title: {
        marginBottom: SPACING.l,
    },
    listItem: {
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    listText: {
        fontWeight: '500'
    },
    logoutButton: {
        marginTop: 'auto',
        marginBottom: SPACING.m
    }
});
