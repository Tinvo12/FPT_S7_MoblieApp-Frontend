import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SendHorizontal } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { useAuth } from '../../hooks/useAuth';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';

export default function MessagingScreen() {
    const route = useRoute();
    const { userData } = useAuth();
    const chatName = route.params?.name || 'Tin nhắn';

    // Real implement would use context/socket. Array of mocks for now.
    const [messages, setMessages] = useState([
        { id: '1', text: 'Chào bạn, tôi muốn check lịch trống.', senderId: 'c1', time: '10:00' },
        { id: '2', text: 'Chào bạn, thứ 7 tuần tới mình còn trống lịch ạ.', senderId: 'm1', time: '10:05' },
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (!inputText.trim()) return;
        const newMsg = {
            id: Date.now().toString(),
            text: inputText,
            senderId: userData?.id || 'c1', // Mocking user sending
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        // Optimistic UI Append
        setMessages([...messages, newMsg]);
        setInputText('');

        // Mock Reply
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: 'Cảm ơn bạn đã nhắn tin. MCHub AI đang tự động phản hồi cho Demo.',
                senderId: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1500);
    };

    const renderMessage = ({ item }) => {
        const isMe = item.senderId === userData?.id;

        return (
            <View style={[styles.messageBubble, isMe ? styles.myMessage : styles.theirMessage]}>
                <AppText color={isMe ? COLORS.white : COLORS.text}>{item.text}</AppText>
                <AppText variant="caption" color={isMe ? COLORS.surfaceHighlight : COLORS.textMuted} style={{ marginTop: 4, alignSelf: 'flex-end' }}>
                    {item.time}
                </AppText>
            </View>
        );
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title={chatName} showBackBtn />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}
            >
                <FlatList
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={renderMessage}
                    contentContainerStyle={styles.chatList}
                />

                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nhập tin nhắn..."
                        placeholderTextColor={COLORS.textMuted}
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <View style={styles.sendButtonBox} onTouchEnd={sendMessage}>
                        <SendHorizontal size={24} color={COLORS.white} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    chatList: {
        padding: SPACING.m,
    },
    messageBubble: {
        maxWidth: '80%',
        padding: SPACING.m,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: COLORS.brand,
        borderBottomRightRadius: 0
    },
    theirMessage: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.surfaceHighlight,
        borderBottomLeftRadius: 0,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    inputArea: {
        flexDirection: 'row',
        padding: SPACING.m,
        paddingBottom: Platform.OS === 'ios' ? SPACING.xl : SPACING.m,
        backgroundColor: COLORS.surface,
        borderTopWidth: 1,
        borderColor: COLORS.border
    },
    textInput: {
        flex: 1,
        backgroundColor: COLORS.background,
        color: COLORS.white,
        borderRadius: RADIUS.pill,
        paddingHorizontal: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.divider,
        marginRight: SPACING.s
    },
    sendButtonBox: {
        width: 45,
        height: 45,
        backgroundColor: COLORS.brand,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
