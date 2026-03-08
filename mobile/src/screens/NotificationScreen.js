import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function NotificationScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>System Update</Text>
                <Text style={styles.cardContent}>Phiên bản mới 1.0.1 đã có sẵn. Nâng cấp để trải nghiệm mượt mà hơn.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Booking Mới</Text>
                <Text style={styles.cardContent}>Bạn vừa có một yêu cầu Booking từ Khách hàng A. Vui lòng phản hồi.</Text>
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
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        padding: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#333'
    },
    cardTitle: {
        color: '#000080',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
    cardContent: {
        color: '#ccc',
        fontSize: 14,
        lineHeight: 20
    },
});
