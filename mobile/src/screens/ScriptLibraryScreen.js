import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ScriptLibraryScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Thư Viện Kịch Bản</Text>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Kịch Bản Khai Trương 2026</Text>
                    <TouchableOpacity style={styles.readBtn} onPress={() => navigation.navigate('ScriptReader')}>
                        <Text style={styles.btnText}>Đọc Ngay</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.cardContent}>Mẫu kịch bản hoàn chỉnh cho các sự kiện khai trương TTTM, cửa hàng, chi nhánh mới.</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Hội Thảo Công Nghệ Blockchain</Text>
                    <TouchableOpacity style={styles.readBtn} onPress={() => navigation.navigate('ScriptReader')}>
                        <Text style={styles.btnText}>Đọc Ngay</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.cardContent}>Thuật ngữ IT, cách dẫn dắt phiên panel discussion hiện đại.</Text>
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
        borderLeftColor: '#00e676'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    cardTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        marginRight: 10
    },
    readBtn: {
        backgroundColor: '#000080',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    cardContent: {
        color: '#888',
        fontSize: 14,
        lineHeight: 20
    },
});
