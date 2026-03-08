import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Star } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS, FONT } from '../../constants/theme';
import { MOCK_DB } from '../../data/mockDatabase';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import Avatar from '../../components/Avatar';

export default function PostEventReviewScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const bookingId = route.params?.bookingId;
    const booking = MOCK_DB.bookings.find(b => b.id === bookingId);
    const mc = MOCK_DB.users.find(u => u.id === booking?.mcId);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (rating === 0) {
            Alert.alert('Chưa có đánh giá', 'Vui lòng chọn số sao đánh giá cho MC.');
            return;
        }

        // Mock sumbit
        Alert.alert('Cảm ơn bạn', 'Đánh giá đã được ghi nhận vào hồ sơ điểm tín nhiệm của MC!', [
            { text: 'Xong', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Đánh Giá MC" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.mcInfoBox}>
                    <Avatar src={mc?.avatar} size={70} />
                    <AppText variant="h2" style={{ marginTop: SPACING.m }}>{mc?.name}</AppText>
                    <AppText color={COLORS.textSecondary}>Sự kiện: {booking?.eventType}</AppText>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" align="center" style={{ marginBottom: SPACING.m }}>
                        Bạn đánh giá MC thế nào?
                    </AppText>
                    <View style={styles.starsRow}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={40}
                                fill={star <= rating ? COLORS.warning : 'transparent'}
                                color={star <= rating ? COLORS.warning : COLORS.border}
                                onPress={() => setRating(star)}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={{ marginBottom: SPACING.s }}>Nhận Xét (Thực Tế)</AppText>
                    <TextInput
                        style={styles.reviewInput}
                        placeholder="MC chuyên nghiệp, xử lý tình huống tốt..."
                        placeholderTextColor={COLORS.textMuted}
                        multiline
                        numberOfLines={5}
                        value={comment}
                        onChangeText={setComment}
                    />
                </View>

                <AppButton
                    title="Gửi Đánh Giá"
                    onPress={handleSubmit}
                    style={{ marginTop: SPACING.l }}
                />

            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: { padding: SPACING.m },
    mcInfoBox: {
        alignItems: 'center',
        marginBottom: SPACING.xl,
        marginTop: SPACING.l
    },
    card: {
        backgroundColor: COLORS.surface,
        padding: SPACING.l,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    starsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: SPACING.s
    },
    reviewInput: {
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        color: COLORS.white,
        fontSize: FONT.size.regular,
        minHeight: 120,
        textAlignVertical: 'top'
    }
});
