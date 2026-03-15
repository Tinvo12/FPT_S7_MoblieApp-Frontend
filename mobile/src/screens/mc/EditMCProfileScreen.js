import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, Alert, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { Camera, Tag, Award, Briefcase, DollarSign } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { AuthContext } from '../../context/AuthContext';
import { getMyMCProfile, updateMCProfile } from '../../api/mcService';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function EditMCProfileScreen({ navigation }) {
    const { userData } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    // Form fields
    const [stageName, setStageName] = useState('');
    const [bio, setBio] = useState('');
    const [minRate, setMinRate] = useState('');
    const [maxRate, setMaxRate] = useState('');
    const [specialties, setSpecialties] = useState('');
    const [experience, setExperience] = useState('');

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const result = await getMyMCProfile();
            if (result.status === 'success' && result.data.profile) {
                const p = result.data.profile;
                setStageName(p.stageName || '');
                setBio(p.bio || '');
                setMinRate(p.rates?.min?.toString() || '');
                setMaxRate(p.rates?.max?.toString() || '');
                setSpecialties(p.specialties?.join(', ') || '');
                setExperience(p.experience?.toString() || '');
            }
        } catch (error) {
            console.error('Fetch profile error:', error);
            // Fallback for demo
            setStageName(userData?.name || '');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const profileData = {
                stageName,
                bio,
                rates: {
                    min: parseInt(minRate) || 0,
                    max: parseInt(maxRate) || 0
                },
                specialties: specialties.split(',').map(s => s.trim()).filter(s => s !== ''),
                experience: parseInt(experience) || 0
            };
            
            const result = await updateMCProfile(profileData);
            if (result.status === 'success') {
                Alert.alert('Thành công', 'Hồ sơ của bạn đã được cập nhật.');
                navigation.goBack();
            }
        } catch (error) {
            console.error('Update profile error:', error);
            Alert.alert('Lỗi', 'Không thể cập nhật hồ sơ. Vui lòng thử lại sau.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={COLORS.brand} />
            </View>
        );
    }

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Chỉnh Sửa Hồ Sơ MC" showBackBtn />
            
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.avatarSection}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={{ uri: userData?.avatar || 'https://via.placeholder.com/150' }} 
                            style={styles.avatar} 
                        />
                        <TouchableOpacity style={styles.cameraBtn}>
                            <Camera color={COLORS.white} size={20} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="h3" style={{ marginTop: SPACING.m }}>{stageName || userData?.name}</AppText>
                    <AppText color={COLORS.textMuted}>Ảnh đại diện công khai</AppText>
                </View>

                <View style={styles.form}>
                    <AppInput
                        label="Nghệ danh (Stage Name)"
                        placeholder="VD: MC Trấn Thành"
                        value={stageName}
                        onChangeText={setStageName}
                    />

                    <AppInput
                        label="Giới thiệu bản thân (Bio)"
                        placeholder="Mô tả kinh nghiệm và phong cách của bạn..."
                        value={bio}
                        onChangeText={setBio}
                        multiline
                        numberOfLines={4}
                        style={styles.bioInput}
                    />

                    <View style={styles.row}>
                        <View style={{ flex: 1, marginRight: SPACING.s }}>
                            <AppInput
                                label="Giá thấp nhất (VNĐ)"
                                icon={DollarSign}
                                placeholder="3,000,000"
                                keyboardType="numeric"
                                value={minRate}
                                onChangeText={setMinRate}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: SPACING.s }}>
                            <AppInput
                                label="Giá cao nhất (VNĐ)"
                                icon={DollarSign}
                                placeholder="10,000,000"
                                keyboardType="numeric"
                                value={maxRate}
                                onChangeText={setMaxRate}
                            />
                        </View>
                    </View>

                    <AppInput
                        label="Số năm kinh nghiệm"
                        icon={Briefcase}
                        placeholder="VD: 5"
                        keyboardType="numeric"
                        value={experience}
                        onChangeText={setExperience}
                    />

                    <AppInput
                        label="Chuyên môn (Cách nhau bằng dấu phẩy)"
                        icon={Tag}
                        placeholder="VD: Đám cưới, Sự kiện IT, Hội thảo..."
                        value={specialties}
                        onChangeText={setSpecialties}
                    />

                    <AppButton
                        title={saving ? "Đang lưu..." : "Lưu Thay Đổi"}
                        onPress={handleSave}
                        disabled={saving}
                        style={{ marginTop: SPACING.xl }}
                    />
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
        paddingBottom: 50,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    avatarSection: {
        alignItems: 'center',
        marginVertical: SPACING.xl,
    },
    imageContainer: {
        position: 'relative',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: COLORS.brandLight,
    },
    cameraBtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.brand,
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    form: {
        marginTop: SPACING.m,
    },
    bioInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    row: {
        flexDirection: 'row',
    }
});
