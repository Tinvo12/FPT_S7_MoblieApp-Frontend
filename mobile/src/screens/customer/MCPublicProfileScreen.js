import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MessageCircle, MapPin, Briefcase, Award } from 'lucide-react-native';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { getMCById } from '../../services/rankingService';

import AppScreen from '../../components/AppScreen';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import Avatar from '../../components/Avatar';
import RatingStars from '../../components/RatingStars';
import TagChip from '../../components/TagChip';
import LoadingState from '../../components/LoadingState';

export default function MCPublicProfileScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const profileId = route.params?.profileId;

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (profileId) {
            setProfile(getMCById(profileId));
        }
    }, [profileId]);

    if (!profile) return <LoadingState />;

    const { mcUser, bio, regions, experienceYears, styles, eventTypes, rates, rating, reviewsCount } = profile;

    return (
        <AppScreen useSafeArea={false}>
            <AppHeader title="Hồ Sơ Của MC" showBackBtn />

            <ScrollView contentContainerStyle={styles.container}>
                {/* Top Info */}
                <View style={styles.topSection}>
                    <Avatar src={mcUser.avatar} size={100} isVerified={mcUser.isVerified} style={{ marginBottom: SPACING.s }} />
                    <AppText variant="h2">{mcUser.name}</AppText>
                    <AppText variant="subtitle" align="center" style={{ marginVertical: SPACING.xs }}>
                        MC Sự Kiện / Người Dẫn Chương Trình
                    </AppText>
                    <RatingStars rating={rating} count={reviewsCount} size={20} />
                </View>

                {/* Action Row */}
                <View style={styles.actionRow}>
                    <AppButton
                        title="Nhắn Tin"
                        variant="outline"
                        style={{ flex: 1, marginRight: SPACING.s }}
                        onPress={() => navigation.navigate('Messaging', { chatId: mcUser.id, name: mcUser.name })}
                    />
                    <AppButton
                        title="Đặt Show"
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate('CreateBooking', { profileId })}
                    />
                </View>

                {/* Info Grid */}
                <View style={styles.infoGrid}>
                    <View style={styles.infoCol}>
                        <Award size={24} color={COLORS.brand} />
                        <AppText variant="body" weight="bold" style={{ marginTop: 4 }}>{experienceYears} Năm</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>Kinh nghiệm</AppText>
                    </View>
                    <View style={styles.infoCol}>
                        <MapPin size={24} color={COLORS.success} />
                        <AppText variant="body" weight="bold" style={{ marginTop: 4 }}>{regions?.length || 1} Tỉnh</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>Hoạt động</AppText>
                    </View>
                    <View style={styles.infoCol}>
                        <Briefcase size={24} color={COLORS.warning} />
                        <AppText variant="body" weight="bold" style={{ marginTop: 4 }}>{profile.bookingsCount}</AppText>
                        <AppText variant="caption" color={COLORS.textSecondary}>Show hoàn thành</AppText>
                    </View>
                </View>

                {/* Sections */}
                <View style={styles.card}>
                    <AppText variant="h3" style={styles.cardTitle}>Giới Thiệu</AppText>
                    <AppText variant="body" color={COLORS.textSecondary} style={{ lineHeight: 22 }}>
                        {bio}
                    </AppText>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.cardTitle}>Mức Cát-Xê Tham Khảo</AppText>
                    <AppText variant="h3" color={COLORS.success}>
                        Từ {(rates.min / 1000000).toFixed(1)}M - {(rates.max / 1000000).toFixed(1)}M VNĐ
                    </AppText>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.cardTitle}>Sự kiện chuyên môn</AppText>
                    <View style={styles.tagsContainer}>
                        {eventTypes?.map((tag, i) => <TagChip key={i} label={tag} variant="brand" />)}
                    </View>
                </View>

                <View style={styles.card}>
                    <AppText variant="h3" style={styles.cardTitle}>Phong Cách</AppText>
                    <View style={styles.tagsContainer}>
                        {styles?.map((styleStr, i) => <TagChip key={i} label={styleStr} />)}
                    </View>
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.m,
        paddingBottom: SPACING.xxl,
    },
    topSection: {
        alignItems: 'center',
        marginBottom: SPACING.l,
        backgroundColor: COLORS.surface,
        padding: SPACING.xl,
        borderRadius: RADIUS.large,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    actionRow: {
        flexDirection: 'row',
        marginBottom: SPACING.l,
    },
    infoGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.surfaceHighlight,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        marginBottom: SPACING.l,
    },
    infoCol: {
        alignItems: 'center',
        flex: 1,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.l,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    cardTitle: {
        marginBottom: SPACING.s,
        color: COLORS.brand,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
