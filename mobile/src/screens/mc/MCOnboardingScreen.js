import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BookOpenText, Tag, Image as ImageIcon } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function MCOnboardingScreen() {
    const navigation = useNavigation();
    const [bio, setBio] = useState('');
    const [rate, setRate] = useState('');
    const [stylesInput, setStylesInput] = useState('');

    const handleSave = () => {
        Alert.alert("Hoàn tất", "Hồ sơ MC của bạn đã được cập nhật thành công!", [
            { text: "Xem Tổng Quan", onPress: () => navigation.navigate('TabHome') }
        ]);
    };

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Hồ Sơ Năng Lực MC" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                <AppText variant="h3" style={{ color: COLORS.brand, marginBottom: SPACING.m }}>
                    Xây dựng hình ảnh cá nhân
                </AppText>
                <AppText color={COLORS.textSecondary} style={{ marginBottom: SPACING.xl, lineHeight: 22 }}>
                    Điền đầy đủ các thông tin chuyên môn giúp khách hàng dễ dàng tìm thấy bạn trên hệ thống Smart Ranking.
                </AppText>

                <View style={styles.imageUploadBox}>
                    <ImageIcon color={COLORS.textMuted} size={40} style={{ marginBottom: SPACING.s }} />
                    <AppText weight="medium">Tải lên Avatar / Ảnh Sự Kiện</AppText>
                    <AppText variant="caption" color={COLORS.textMuted}>(Max 5MB)</AppText>
                </View>

                <AppInput
                    label="Đoạn giới thiệu ngắn (Bio)"
                    icon={BookOpenText}
                    placeholder="Kinh nghiệm dẫn 50+ sự kiện đám cưới..."
                    value={bio}
                    onChangeText={setBio}
                    multiline
                    style={{ minHeight: 80 }}
                />

                <AppInput
                    label="Cát-xê trung bình 1 buổi (VNĐ)"
                    icon={Tag}
                    placeholder="VD: 5.000.000"
                    keyboardType="numeric"
                    value={rate}
                    onChangeText={setRate}
                />

                <AppInput
                    label="Phong cách sở trường (Cách nhau bởi dấu phẩy)"
                    icon={Tag}
                    placeholder="VD: Hài hước, Lịch sự, Chuyên gia..."
                    value={stylesInput}
                    onChangeText={setStylesInput}
                />

                <AppButton
                    title="Lưu Hồ Sơ Khởi Tạo"
                    onPress={handleSave}
                    style={{ marginTop: SPACING.xl }}
                />
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
    },
    imageUploadBox: {
        height: 150,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.brandLight,
        borderRadius: RADIUS.medium,
        backgroundColor: 'rgba(0,0,128,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.l,
    }
});
