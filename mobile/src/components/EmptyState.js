import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FolderSearch } from 'lucide-react-native';
import { COLORS, SPACING } from '../constants/theme';
import AppText from './AppText';
import AppButton from './AppButton';

export default function EmptyState({
    icon: Icon = FolderSearch,
    title = "Không có dữ liệu",
    message = "Chưa có thông tin nào để hiển thị vào lúc này.",
    actionLabel,
    onAction
}) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon size={64} color={COLORS.textSecondary} strokeWidth={1.5} />
            </View>
            <AppText variant="h3" style={styles.title}>{title}</AppText>
            <AppText variant="body" color={COLORS.textSecondary} style={styles.message}>
                {message}
            </AppText>
            {actionLabel && onAction && (
                <AppButton
                    title={actionLabel}
                    onPress={onAction}
                    variant="secondary"
                    style={styles.actionBtn}
                />
            )}
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
    iconContainer: {
        marginBottom: SPACING.l,
        opacity: 0.5,
    },
    title: {
        marginBottom: SPACING.s,
        textAlign: 'center',
    },
    message: {
        textAlign: 'center',
        marginBottom: SPACING.xl,
        lineHeight: 22,
    },
    actionBtn: {
        minWidth: 150,
    }
});
