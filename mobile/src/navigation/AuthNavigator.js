import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PublicLandingScreen from '../screens/auth/PublicLandingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="PublicLanding"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: COLORS.background }
            }}
        >
            <Stack.Screen name="PublicLanding" component={PublicLandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}
