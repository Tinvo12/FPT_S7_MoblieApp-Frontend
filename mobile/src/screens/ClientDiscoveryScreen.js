import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

export default function ClientDiscoveryScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Tìm Kiếm Khách Hàng</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Tìm sự kiện đang cần MC..."
                placeholderTextColor="#888"
            />

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Sự kiện: Tiệc Tất Niên Công ty ABC</Text>
                <Text style={styles.cardContent}>Yêu cầu: MC Song ngữ (Anh-Việt). Cát xê: 10.000.000 VNĐ. Địa điểm: Hà Nội.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Sự kiện: Hội thảo Công nghệ Blockchain</Text>
                <Text style={styles.cardContent}>Yêu cầu: Nắm vững thuật ngữ IT. Cát xê: Thỏa thuận. Địa điểm: TP. HCM.</Text>
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
    searchInput: {
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#333'
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
