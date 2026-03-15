import React from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../constants/theme';
import AppText from './AppText';

export default function AppButton({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    loading = false,
    style
}) {
    const getBackgroundColor = () => {
        if (disabled) return COLORS.divider; // A darker disabled state
        if (variant === 'secondary') return COLORS.transparent;
        if (variant === 'ghost') return COLORS.transparent;
        if (variant === 'danger') return COLORS.danger;
        if (variant === 'outline') return COLORS.transparent;
        return COLORS.brand;
    };

    const getTextColor = () => {
        if (disabled) return COLORS.textMuted;
        if (variant === 'secondary') return COLORS.white;
        if (variant === 'ghost') return COLORS.brandLight;
        if (variant === 'outline') return COLORS.brand;
        return COLORS.white;
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
            style={[
                styles.button,
                { backgroundColor: getBackgroundColor() },
                variant === 'outline' && styles.outline,
                variant === 'secondary' && { borderWidth: 1, borderColor: COLORS.surface },
                variant === 'ghost' && { paddingHorizontal: SPACING.m }, // Ghost usually has less padding
                variant === 'primary' && !disabled && SHADOWS.glow,
                style
            ]}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <AppText weight="bold" color={getTextColor()}>{title}</AppText>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.l,
        borderRadius: RADIUS.medium,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    outline: {
        borderWidth: 1,
        borderColor: COLORS.brand,
    }
});
