import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PublicLandingScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>MCHud Landing Page</Text>
            <Text style={styles.subtitle}>Chào mừng bạn đến với mạng lưới MC chuyên nghiệp</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Giới thiệu</Text>
                <Text style={styles.cardContent}>Khám phá các MC tài năng và đặt lịch chuyên nghiệp thông qua MCHud.</Text>
            </View>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Đăng Nhập / Đăng Ký</Text>
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
    title: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#a0a0a0',
        fontSize: 16,
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
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
    actionButton: {
        backgroundColor: '#000080',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16
    },
});
