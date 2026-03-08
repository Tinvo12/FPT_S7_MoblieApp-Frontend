import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ResourceCenterScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Trung tâm hỗ trợ</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Hướng dẫn sử dụng App</Text>
                <Text style={styles.cardContent}>Tìm hiểu cách để đăng bài profile hoàn hảo, và tối ưu hóa lượt booking.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Chính sách Thanh Toán & Nạp Rút</Text>
                <Text style={styles.cardContent}>Tham khảo biểu phí và quy định về thu nhập của MC.</Text>
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
});
