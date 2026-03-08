import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, FONT } from '../constants/theme';
import AppText from './AppText';

export default function AppInput({
    label,
    error,
    icon: Icon,
    style,
    ...props
}) {
    return (
        <View style={[styles.container, style]}>
            {label && <AppText variant="caption" weight="medium" style={styles.label}>{label}</AppText>}
            <View style={[
                styles.inputContainer,
                error && styles.errorBorder
            ]}>
                {Icon && <View style={styles.iconWrapper}><Icon size={20} color={COLORS.textSecondary} /></View>}
                <TextInput
                    style={styles.input}
                    placeholderTextColor={COLORS.textMuted}
                    {...props}
                />
            </View>
            {error && <AppText variant="caption" color={COLORS.danger} style={styles.errorText}>{error}</AppText>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.m,
    },
    label: {
        marginBottom: SPACING.xs,
        color: COLORS.textSecondary,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: RADIUS.medium,
        overflow: 'hidden',
    },
    errorBorder: {
        borderColor: COLORS.danger,
    },
    iconWrapper: {
        paddingLeft: SPACING.m,
    },
    input: {
        flex: 1,
        padding: SPACING.m,
        color: COLORS.text,
        fontSize: FONT.size.regular,
    },
    errorText: {
        marginTop: SPACING.xs,
    }
});
