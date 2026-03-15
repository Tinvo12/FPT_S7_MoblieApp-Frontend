import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import { initiateSocketConnection, disconnectSocket, subscribeToChat, sendMessage } from '../api/socketService';

export default function MessagingScreen({ route }) {
    const { userData } = useContext(AuthContext);
    const bookingId = route?.params?.bookingId || 'test_room_1'; // Fallback for demo
    const [messages, setMessages] = useState([
        { id: '1', content: 'Chào bạn, tôi muốn đặt lịch MC vào thứ 7 tuần sau.', sender: 'other' },
        { id: '2', content: 'Dạ vâng, thứ 7 tuần sau em còn trống lịch ạ.', sender: userData?.id || 'me' }
    ]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        initiateSocketConnection(bookingId);
        
        subscribeToChat((err, data) => {
            if (err) return;
            // Map the incoming data to our list format
            setMessages(prev => [...prev, {
                id: data._id || Date.now().toString(),
                content: data.content,
                sender: data.sender // This will be the user ID
            }]);
        });

        return () => {
            disconnectSocket();
        };
    }, [bookingId]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        const messageData = {
            booking: bookingId,
            sender: userData?.id || 'temp_user_id',
            receiver: route?.params?.receiverId || 'temp_receiver_id',
            content: inputText,
        };

        sendMessage(messageData);
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatArea}>
                {messages.map((msg) => {
                    const isMe = msg.sender === (userData?.id || 'me');
                    return (
                        <View 
                            key={msg.id} 
                            style={isMe ? styles.messageSender : styles.messageReceiver}
                        >
                            <AppText style={styles.messageText}>{msg.content}</AppText>
                        </View>
                    );
                })}
            </ScrollView>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tin nhắn..."
                    placeholderTextColor={COLORS.textMuted}
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <AppText weight="bold" color={COLORS.white}>Gửi</AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    chatArea: {
        flex: 1,
        padding: SPACING.m,
    },
    messageReceiver: {
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.s,
        alignSelf: 'flex-start',
        maxWidth: '80%',
    },
    messageSender: {
        backgroundColor: COLORS.brand,
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.s,
        alignSelf: 'flex-end',
        maxWidth: '80%',
    },
    messageText: {
        color: COLORS.white,
    },
    messageTextSender: {
        color: COLORS.white,
    },
    inputArea: {
        flexDirection: 'row',
        padding: SPACING.s,
        backgroundColor: COLORS.surface,
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.background,
        color: COLORS.white,
        borderRadius: RADIUS.medium,
        paddingHorizontal: SPACING.m,
        marginRight: SPACING.s,
    },
    sendButton: {
        backgroundColor: COLORS.brand,
        paddingHorizontal: SPACING.l,
        justifyContent: 'center',
        borderRadius: RADIUS.medium,
    }
});
