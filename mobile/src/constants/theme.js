export const COLORS = {
    brand: '#000080',       // Navy Blue Brand Color
    brandLight: '#1a1a99',

    background: '#121212',  // Base dark background
    surface: '#1e1e1e',     // Elevated card background
    surfaceHighlight: '#2c2c2c',

    text: '#ffffff',
    textSecondary: '#a0a0a0',
    textMuted: '#666666',

    border: '#333333',
    divider: '#2a2a2a',

    success: '#00e676',
    warning: '#ffcc00',
    danger: '#ff4444',
    info: '#2196f3',

    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent'
};

export const SPACING = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
};

export const RADIUS = {
    small: 4,
    medium: 8, // ROUND_EIGHT reference
    large: 12,
    pill: 999,
};

export const FONT = {
    size: {
        small: 12,
        regular: 14,
        medium: 16,
        large: 18,
        xlarge: 22,
        xxlarge: 26,
        title: 32,
    },
    weight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    }
};

export const SHADOWS = {
    subtle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    glow: {
        shadowColor: COLORS.brand,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    }
};
