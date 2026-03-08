import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { logout } from '../api/authService';

export default function SettingsScreen({ navigation }) {

    const handleLogout = async () => {
        // Thực hiện wipe store token
        await logout();
        Alert.alert('Đăng xuất', 'Bạn đã đăng xuất khỏi MCHud');
        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cài Đặt Hệ Thống</Text>

            <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listText}>Chi tiết hồ sơ Profile (MC Public Profile)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listText}>Cấu hình bảo mật</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listText}>Thông báo (Notification Center)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Đăng Xuất</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 24,
    },
    title: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 24,
    },
    listItem: {
        backgroundColor: '#1e1e1e',
        padding: 18,
        borderRadius: 8, // ROUND_EIGHT
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333'
    },
    listText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    logoutButton: {
        padding: 16,
        alignItems: 'center',
        marginTop: 'auto',
        borderWidth: 1.5,
        borderColor: '#ff4444',
        borderRadius: 8,
        marginBottom: 20
    },
    logoutText: {
        color: '#ff4444',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
