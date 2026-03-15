import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { COLORS, SPACING } from '../constants/theme';

export default function MCOnboardingScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <AppText variant="h1" weight="bold" style={styles.title}>Trở Thành MC Chuyên Nghiệp</AppText>

            <AppInput 
                label="Tên Nghệ Danh (Stage Name)" 
                placeholder="Nhập nghệ danh..." 
            />

            <AppInput 
                label="Chuyên Môn Của Bạn (Event Types)" 
                placeholder="VD: Hội nghị, Đám cưới..." 
            />

            <AppInput 
                label="Video Demo (Link YouTube)" 
                placeholder="https://youtube.com/..." 
            />

            <AppButton 
                title="Hoàn Tất Hồ Sơ" 
                onPress={() => navigation.navigate('Dashboard')} 
                style={styles.submitBtn} 
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.l,
    },
    title: {
        marginBottom: SPACING.xl,
        textAlign: 'center'
    },
    submitBtn: {
        marginTop: SPACING.m
    }
});
