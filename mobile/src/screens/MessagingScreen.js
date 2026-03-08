import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function MessagingScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatArea}>
                <View style={styles.messageReceiver}>
                    <Text style={styles.messageText}>Chào bạn, tôi muốn đặt lịch MC vào thứ 7 tuần sau.</Text>
                </View>
                <View style={styles.messageSender}>
                    <Text style={styles.messageTextSender}>Dạ vâng, thứ 7 tuần sau em còn trống lịch ạ.</Text>
                </View>
            </ScrollView>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tin nhắn..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    chatArea: {
        flex: 1,
        padding: 20,
    },
    messageReceiver: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'flex-start',
        maxWidth: '80%',
    },
    messageSender: {
        backgroundColor: '#000080',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'flex-end',
        maxWidth: '80%',
    },
    messageText: {
        color: '#ffffff',
        fontSize: 14,
    },
    messageTextSender: {
        color: '#ffffff',
        fontSize: 14,
    },
    inputArea: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#1e1e1e',
    },
    input: {
        flex: 1,
        backgroundColor: '#121212',
        color: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#000080',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 8,
    },
    sendButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    }
});
