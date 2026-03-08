import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function PostEventReviewScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Đánh Giá Sau Sự Kiện</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Đánh giá MC Cát Tường - Sự kiện: Lễ Khai Trương 15/08</Text>
                <Text style={styles.ratingText}>Chất lượng: ⭐⭐⭐⭐⭐</Text>
                <TextInput
                    style={styles.reviewInput}
                    multiline
                    numberOfLines={4}
                    placeholder="Nhập nhận xét của bạn về MC..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.btnText}>Gửi Đánh Giá</Text>
                </TouchableOpacity>
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
    ratingText: {
        color: '#ffcc00', // Màu vang sao đánh giá
        fontSize: 20,
        marginBottom: 15
    },
    reviewInput: {
        backgroundColor: '#121212',
        color: '#fff',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#333',
        minHeight: 100,
        textAlignVertical: 'top',
        marginBottom: 15
    },
    submitBtn: {
        backgroundColor: '#000080',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
