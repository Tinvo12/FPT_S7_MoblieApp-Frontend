import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Star, StarHalf } from 'lucide-react-native';
import { COLORS, SPACING } from '../constants/theme';
import AppText from './AppText';

export default function RatingStars({ rating, count, size = 16, style }) {
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = (rating || 0) % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <View style={[styles.container, style]}>
            {/* Ensure rating matches width accurately */}
            <View style={styles.stars}>
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`f-${i}`} size={size} fill={COLORS.warning} color={COLORS.warning} />
                ))}
                {hasHalfStar && <StarHalf size={size} fill={COLORS.warning} color={COLORS.warning} />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`e-${i}`} size={size} color={COLORS.textMuted} />
                ))}
            </View>

            {count !== undefined && (
                <AppText variant="caption" style={styles.countText}>
                    {rating.toFixed(1)} ({count})
                </AppText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stars: {
        flexDirection: 'row',
    },
    countText: {
        marginLeft: SPACING.xs,
    }
});
