import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';
import AppText from './AppText';

export default function LoadingState({ message = 'Đang tải dữ liệu...' }) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={COLORS.brand} />
            {message ? (
                <AppText variant="body" color={COLORS.textSecondary} style={styles.message}>
                    {message}
                </AppText>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING.xl,
        backgroundColor: COLORS.background,
    },
    message: {
        marginTop: SPACING.l,
        textAlign: 'center',
    }
});
