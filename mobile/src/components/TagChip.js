import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import AppText from './AppText';

export default function TagChip({ label, variant = 'default', style }) {
    const getStyles = () => {
        switch (variant) {
            case 'brand': return { bg: COLORS.brand, text: COLORS.white };
            case 'success': return { bg: 'rgba(0, 230, 118, 0.15)', text: COLORS.success };
            case 'warning': return { bg: 'rgba(255, 204, 0, 0.15)', text: COLORS.warning };
            default: return { bg: COLORS.surfaceHighlight, text: COLORS.textSecondary };
        }
    };

    const currentStyles = getStyles();

    return (
        <View style={[styles.chip, { backgroundColor: currentStyles.bg }, style]}>
            <AppText variant="caption" weight="semiBold" color={currentStyles.text}>
                {label}
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    chip: {
        paddingHorizontal: SPACING.s,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.pill,
        alignSelf: 'flex-start',
        marginRight: SPACING.xs,
        marginBottom: SPACING.xs,
    }
});
