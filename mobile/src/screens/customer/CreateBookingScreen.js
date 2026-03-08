import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Calendar as CalIcon, MapPin, Clock, PartyPopper, DollarSign } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { getMCById } from '../../services/rankingService';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function CreateBookingScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const profileId = route.params?.profileId;
    const mc = getMCById(profileId);

    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [location, setLocation] = useState('');
    const [eventType, setEventType] = useState('');
    const [budget, setBudget] = useState('');

    const handleCreateDraft = () => {
        if (!eventDate || !location || !budget) {
            Alert.alert("Lỗi", "Vui lòng nhập ngày, địa điểm và mức cát-xê đề xuất");
            return;
        }

        // Pass data into Checkout Escrow Flow
        navigation.navigate('BookingCheckout', {
            profileId,
            bookingData: { eventDate, startTime, location, eventType, budget }
        });
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title={`Đặt MC ${mc?.mcUser?.name || ''}`} showBackBtn />
            <ScrollView contentContainerStyle={styles.container}>
                <AppText variant="h2" style={styles.title}>Chi tiết sự kiện</AppText>
                <AppText variant="body" color={COLORS.textSecondary} style={{ marginBottom: SPACING.l }}>
                    Vui lòng cung cấp chi tiết sự kiện để MC có thể nắm bắt và phản hồi lịch trống.
                </AppText>

                <AppInput
                    label="Ngày diễn ra (DD/MM/YYYY)"
                    icon={CalIcon}
                    placeholder="VD: 25/08/2026"
                    value={eventDate}
                    onChangeText={setEventDate}
                />

                <AppInput
                    label="Thời gian bắt đầu (Giờ)"
                    icon={Clock}
                    placeholder="VD: 18:00"
                    value={startTime}
                    onChangeText={setStartTime}
                />

                <AppInput
                    label="Địa điểm chi tiết"
                    icon={MapPin}
                    placeholder="Số nhà, đường, quận, thành phố..."
                    value={location}
                    onChangeText={setLocation}
                />

                <AppInput
                    label="Loại sự kiện"
                    icon={PartyPopper}
                    placeholder="VD: Lễ ra mắt SP, Đám cưới..."
                    value={eventType}
                    onChangeText={setEventType}
                />

                <AppInput
                    label="Cát-xê đề xuất (Thỏa thuận)"
                    icon={DollarSign}
                    placeholder="VD: 15.000.000"
                    keyboardType="numeric"
                    value={budget}
                    onChangeText={setBudget}
                />

                <AppButton
                    title="Đến trang Xác nhận & Thanh Toán"
                    onPress={handleCreateDraft}
                    style={{ marginTop: SPACING.l }}
                />

            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    title: {
        color: COLORS.brand,
        marginBottom: SPACING.xs
    }
});
