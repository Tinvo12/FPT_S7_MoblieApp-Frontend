import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import { COLORS, SPACING, SHADOWS } from '../constants/theme';
import AppText from './AppText';

export default function AppHeader({
    title,
    showBackBtn = false,
    rightComponent,
    onBackPress
}) {
    const navigation = useNavigation();

    const handleBack = () => {
        if (onBackPress) {
            onBackPress();
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <View style={[styles.header, SHADOWS.subtle]}>
            <View style={styles.left}>
                {showBackBtn && (
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={handleBack}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <ChevronLeft color={COLORS.white} size={28} />
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.center}>
                <AppText variant="h3" color={COLORS.white} numberOfLines={1}>{title}</AppText>
            </View>

            <View style={styles.right}>
                {rightComponent}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: COLORS.brand,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
    },
    left: {
        flex: 1,
        alignItems: 'flex-start',
    },
    center: {
        flex: 3,
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    },
    backBtn: {
        padding: SPACING.xs,
    }
});
