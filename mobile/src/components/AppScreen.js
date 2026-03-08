import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../constants/theme';

export default function AppScreen({ children, style, useSafeArea = true }) {
    const content = (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            {useSafeArea ? (
                <SafeAreaView style={styles.safeArea}>
                    {content}
                </SafeAreaView>
            ) : content}
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    }
});
