import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function EarningsWalletScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Thu Nhập & Ví</Text>

            <View style={styles.balanceCard}>
                <Text style={styles.balanceLabel}>Số Dư Khả Dụng</Text>
                <Text style={styles.balanceAmout}>15,500,000 VNĐ</Text>
                <TouchableOpacity style={styles.withdrawBtn}>
                    <Text style={styles.btnText}>Yêu cầu Rút Tiền</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.historyTitle}>Lịch Sử Giao Dịch</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>+ 5,000,000 VNĐ</Text>
                <Text style={styles.cardContent}>Thanh toán Escrow: Đám Cưới A&B (12/03/2026)</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>- 500,000 VNĐ</Text>
                <Text style={styles.cardContent}>Phí nền tảng MCHud (Tháng 2)</Text>
            </View>
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
    balanceCard: {
        backgroundColor: '#000080',
        borderRadius: 8,
        padding: 30,
        alignItems: 'center',
        marginBottom: 30
    },
    balanceLabel: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 5
    },
    balanceAmout: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20
    },
    withdrawBtn: {
        backgroundColor: '#1e1e1e',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 8
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    historyTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
    },
    cardTitle: {
        color: '#00e676', // Xanh la the hien tien cong
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    cardContent: {
        color: '#888',
        fontSize: 14,
    },
});
