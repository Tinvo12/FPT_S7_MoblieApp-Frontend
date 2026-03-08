import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONT } from '../constants/theme';

export default function AppText({
    children,
    variant = 'body',
    color = COLORS.text,
    weight = 'regular',
    align = 'left',
    style,
    ...props
}) {
    return (
        <Text
            style={[
                styles[variant],
                { color, textAlign: align, fontWeight: FONT.weight[weight] },
                style
            ]}
            {...props}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    h1: { fontSize: FONT.size.title, fontWeight: FONT.weight.bold },
    h2: { fontSize: FONT.size.xxlarge, fontWeight: FONT.weight.bold },
    h3: { fontSize: FONT.size.xlarge, fontWeight: FONT.weight.semiBold },
    subtitle: { fontSize: FONT.size.medium, color: COLORS.textSecondary },
    body: { fontSize: FONT.size.regular },
    caption: { fontSize: FONT.size.small, color: COLORS.textMuted },
});
