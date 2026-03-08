import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function MCOnboardingScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Trở Thành MC Chuyên Nghiệp</Text>

            <View style={styles.section}>
                <Text style={styles.label}>Tên Nghệ Danh (Stage Name)</Text>
                <TextInput style={styles.input} placeholderTextColor="#888" placeholder="Nhập nghệ danh..." />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Chuyên Môn Của Bạn (Event Types)</Text>
                <TextInput style={styles.input} placeholderTextColor="#888" placeholder="VD: Hội nghị, Đám cưới..." />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Video Demo (Link YouTube)</Text>
                <TextInput style={styles.input} placeholderTextColor="#888" placeholder="https://youtube.com/..." />
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.submitText}>Hoàn Tất Hồ Sơ</Text>
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
        marginBottom: 30,
        textAlign: 'center'
    },
    section: {
        marginBottom: 20
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        borderRadius: 8,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#333'
    },
    submitBtn: {
        backgroundColor: '#000080',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
