import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SuccessScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>✅</Text>
            <Text style={styles.title}>Hoàn Thành!</Text>
            <Text style={styles.message}>Mọi thao tác đã thành công. Giao dịch đã được lưu vào hệ thống bảo vệ (Escrow) của MCHud.</Text>

            <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.homeBtnText}>Quay Về Trang Chủ</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 80,
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        color: '#888',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 40
    },
    homeBtn: {
        backgroundColor: '#000080',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center'
    },
    homeBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
