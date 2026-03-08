import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ScriptReaderScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Đọc Kịch Bản</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>MC: Lời chào mở đầu</Text>
                <Text style={styles.cardContent}>"Kính thưa quý vị đại biểu, thưa quý vị khách quý! Chào mừng quý vị đã đến với sự kiện ra mắt sản phẩm MCHud ngày hôm nay!"</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>MC: Giới thiệu</Text>
                <Text style={styles.cardContent}>"Sự kiện hôm nay nhằm tôn vinh những giá trị..."</Text>
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
        color: '#ffffff', // Sáng hơn để dễ đọc kịch bản
        fontSize: 16,
        lineHeight: 24,
        fontStyle: 'italic',
    },
});
