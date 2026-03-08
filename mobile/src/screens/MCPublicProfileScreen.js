import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function MCPublicProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Mocking avatar base */}
            <View style={styles.avatarPlaceholder} />

            <Text style={styles.mcName}>Phạm Quang Minh</Text>
            <Text style={styles.mcTitle}>MC Sự Kiện / Người Dẫn Chương Trình Truyền Hình</Text>

            <TouchableOpacity style={styles.bookBtn}>
                <Text style={styles.btnText}>BOOK NOW</Text>
            </TouchableOpacity>

            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Giới Thiệu</Text>
                <Text style={styles.sectionContent}>Hơn 5 năm kinh nghiệm dẫn các chương trình giải trí và hội nghị cấp cao. Phong cách chững chạc, humor.</Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Chuyên Môn</Text>
                <Text style={styles.badge}>Hội nghị</Text>
                <Text style={styles.badge}>Lễ hội âm nhạc</Text>
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
    avatarPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#000080',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    mcName: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    mcTitle: {
        color: '#888',
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 20
    },
    bookBtn: {
        backgroundColor: '#000080',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 30
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    infoSection: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        borderRadius: 8,
        marginBottom: 15
    },
    sectionTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    sectionContent: {
        color: '#ccc',
        fontSize: 14,
        lineHeight: 22
    },
    badge: {
        color: '#000080',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        alignSelf: 'flex-start',
        overflow: 'hidden',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 12
    }
});
