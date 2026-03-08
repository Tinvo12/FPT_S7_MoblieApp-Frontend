import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Star, CheckCircle } from 'lucide-react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import AppText from './AppText';
import Avatar from './Avatar';
import TagChip from './TagChip';
import RatingStars from './RatingStars';

export default function MCProfileCard({ profile, onPress, style }) {
    if (!profile || !profile.mcUser) return null;
    const { mcUser, rates, rating, reviewsCount, eventTypes } = profile;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.card, style]}
            onPress={onPress}
        >
            <View style={styles.header}>
                <Avatar src={mcUser.avatar} size={60} isVerified={mcUser.isVerified} />
                <View style={styles.headerInfo}>
                    <View style={styles.nameRow}>
                        <AppText variant="h3" color={COLORS.white} numberOfLines={1}>
                            {mcUser.name}
                        </AppText>
                    </View>
                    <RatingStars rating={rating} count={reviewsCount} />

                    <AppText variant="caption" color={COLORS.textSecondary} style={{ marginTop: 2 }}>
                        Từ {(rates.min / 1000000).toFixed(1)}M - {(rates.max / 1000000).toFixed(1)}M VNĐ
                    </AppText>
                </View>
            </View>

            <View style={styles.tagsContainer}>
                {eventTypes?.slice(0, 3).map((type, index) => (
                    <TagChip key={index} label={type} />
                ))}
                {eventTypes?.length > 3 && <TagChip label={`+${eventTypes.length - 3}`} />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        padding: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: SPACING.m,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.m,
    },
    headerInfo: {
        marginLeft: SPACING.m,
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
