import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { UserCheck } from 'lucide-react-native';

export default function Avatar({ src, size = 50, isVerified = false, style }) {
    return (
        <View style={[styles.container, { width: size, height: size }, style]}>
            {src ? (
                <Image
                    source={{ uri: src }}
                    style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
                />
            ) : (
                <View style={[styles.placeholder, { width: size, height: size, borderRadius: size / 2 }]} />
            )}

            {isVerified && (
                <View style={styles.badge}>
                    <UserCheck size={14} color={COLORS.white} strokeWidth={3} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    image: {
        backgroundColor: COLORS.surfaceHighlight,
    },
    placeholder: {
        backgroundColor: COLORS.brand,
        opacity: 0.8,
    },
    badge: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: COLORS.success,
        borderRadius: 12,
        padding: 2,
        borderWidth: 2,
        borderColor: COLORS.background,
    }
});
