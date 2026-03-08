import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../hooks/useAuth';
import { ROLES } from '../constants/roles';
import { COLORS } from '../constants/theme';

import AuthNavigator from './AuthNavigator';
import CustomerNavigator from './CustomerNavigator';
import MCNavigator from './MCNavigator';
import AdminNavigator from './AdminNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
    const { isLoading, userToken, userData } = useAuth();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
                <ActivityIndicator size="large" color={COLORS.brand} />
                <Text style={{ marginTop: 20, color: COLORS.textSecondary }}>Đang khởi tạo hệ thống...</Text>
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen name="AuthGroup" component={AuthNavigator} />
            ) : (
                // User is signed in
                <>
                    {userData?.role === ROLES.MC && (
                        <Stack.Screen name="MCGroup" component={MCNavigator} />
                    )}
                    {userData?.role === ROLES.CUSTOMER && (
                        <Stack.Screen name="CustomerGroup" component={CustomerNavigator} />
                    )}
                    {userData?.role === ROLES.ADMIN && (
                        <Stack.Screen name="AdminGroup" component={AdminNavigator} />
                    )}

                    {/* Fallback routing */}
                    {!userData?.role && (
                        <Stack.Screen name="AuthGroup" component={AuthNavigator} />
                    )}
                </>
            )}
        </Stack.Navigator>
    );
}
