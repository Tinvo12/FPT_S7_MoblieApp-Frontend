import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, RADIUS, SPACING, SHADOWS } from '../constants/theme';

export default function AppCard({
    children,
    onPress,
    style,
    withShadow = true,
    noPadding = false
}) {
    const Container = onPress ? TouchableOpacity : View;

    return (
        <Container
            onPress={onPress}
            activeOpacity={0.9}
            style={[
                styles.card,
                !noPadding && styles.padding,
                withShadow && SHADOWS.subtle,
                style
            ]}
        >
            {children}
        </Container>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.medium,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.border,
        overflow: 'hidden'
    },
    padding: {
        padding: SPACING.m,
    }
});
