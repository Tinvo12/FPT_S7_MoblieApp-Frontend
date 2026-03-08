import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function BookingCheckoutScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Checkout & Escrow</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Thông Tin Đặt MC</Text>
                <Text style={styles.rowText}>- Tên MC: Trần Văn A</Text>
                <Text style={styles.rowText}>- Sự Kiện: Hội Thảo Y Khoa Cấp Cao</Text>
                <Text style={styles.rowText}>- Ngày: 25/08/2026</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Chi Tiết Thanh Toán (Escrow)</Text>
                <Text style={styles.rowText}>Phí MC: 20,000,000 VNĐ</Text>
                <Text style={styles.rowText}>Phí Nền Tảng: 1,000,000 VNĐ</Text>
                <Text style={[styles.rowText, styles.totalText]}>Tổng Cộng: 21,000,000 VNĐ</Text>
            </View>

            <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('Success')}>
                <Text style={styles.payBtnText}>Thanh Toán An Toàn Qua MCHud (Giữ Tiền)</Text>
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
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 20,
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
        marginBottom: 15,
    },
    rowText: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 8,
    },
    totalText: {
        color: '#00e676',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingTop: 10
    },
    payBtn: {
        backgroundColor: '#000080',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    payBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
