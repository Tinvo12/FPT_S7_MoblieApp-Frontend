import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DashboardScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.welcomeText}>Xin chào, MC!</Text>
            <Text style={styles.subtitle}>Tổng quan hoạt động và Booking</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Upcoming Events (Sự kiện sắp tới)</Text>
                <Text style={styles.cardContent}>Bạn có 2 sự kiện đang chờ trên hệ thống MCHud.</Text>
            </View>

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('EarningsWallet')}>
                <Text style={styles.buttonText}>Thu nhập & Ví</Text>
            </TouchableOpacity>

            <Text style={styles.navSection}>Chức Năng Nhanh</Text>

            <View style={styles.grid}>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('ClientDiscovery')}>
                    <Text style={styles.gridText}>Tìm Kiếm KH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('ScriptLibrary')}>
                    <Text style={styles.gridText}>Thư Viện KB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Messaging')}>
                    <Text style={styles.gridText}>Tin Nhắn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('MCPublicProfile')}>
                    <Text style={styles.gridText}>Hồ Sơ Của Tôi</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={styles.buttonText}>Cài Đặt & Xác Thực</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 24,
    },
    welcomeText: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#a0a0a0',
        fontSize: 16,
        marginBottom: 32,
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8, // ROUND_EIGHT
        padding: 20,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#000080'
    },
    cardTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    cardContent: {
        color: '#888',
        fontSize: 14,
        lineHeight: 20
    },
    navSection: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    gridItem: {
        backgroundColor: '#1e1e1e',
        width: '48%',
        padding: 20,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333'
    },
    gridText: {
        color: '#fff',
        fontWeight: '600'
    },
    navButton: {
        backgroundColor: '#000080',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20
    },
    settingsButton: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 50,
        borderWidth: 1,
        borderColor: '#000080'
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16
    },
});
