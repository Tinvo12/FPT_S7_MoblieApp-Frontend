import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../constants/theme';
import AppText from './AppText';

export default function StatusBadge({ status, style }) {
    const getStatusConfig = () => {
        switch (status?.toLowerCase()) {
            case 'confirmed':
            case 'completed':
            case 'fullypaid':
                return { bg: 'rgba(0, 230, 118, 0.2)', color: COLORS.success, label: status };
            case 'pending':
            case 'depositpaid':
            case 'inprogress':
                return { bg: 'rgba(255, 204, 0, 0.2)', color: COLORS.warning, label: status };
            case 'cancelled':
            case 'failed':
            case 'refunded':
                return { bg: 'rgba(255, 68, 68, 0.2)', color: COLORS.danger, label: status };
            default:
                return { bg: COLORS.surfaceHighlight, color: COLORS.textSecondary, label: status || 'Unknown' };
        }
    };

    const config = getStatusConfig();

    return (
        <View style={[styles.badgeContainer, { backgroundColor: config.bg }, style]}>
            <AppText variant="caption" weight="bold" style={{ color: config.color, textTransform: 'uppercase' }}>
                {config.label}
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    badgeContainer: {
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.xs,
        borderRadius: RADIUS.pill,
        alignSelf: 'flex-start',
    }
});
