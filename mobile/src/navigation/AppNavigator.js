import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PublicLandingScreen from '../screens/PublicLandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ScriptReaderScreen from '../screens/ScriptReaderScreen';
import MessagingScreen from '../screens/MessagingScreen';
import ResourceCenterScreen from '../screens/ResourceCenterScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ClientDiscoveryScreen from '../screens/ClientDiscoveryScreen';
import PostEventReviewScreen from '../screens/PostEventReviewScreen';
import EarningsWalletScreen from '../screens/EarningsWalletScreen';
import MCPublicProfileScreen from '../screens/MCPublicProfileScreen';
import ScriptLibraryScreen from '../screens/ScriptLibraryScreen';
import MCOnboardingScreen from '../screens/MCOnboardingScreen';
import BookingCheckoutScreen from '../screens/BookingCheckoutScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="PublicLanding"
            screenOptions={{
                headerStyle: { backgroundColor: '#000080' }, // Custom color brand từ Stitch
                headerTintColor: '#fff',
                cardStyle: { backgroundColor: '#121212' }, // Dark mode base
                headerTitleStyle: { fontWeight: 'bold' }
            }}
        >
            <Stack.Screen name="PublicLanding" component={PublicLandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'MC Dashboard', headerLeft: () => null }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings & Verification' }} />
            <Stack.Screen name="ScriptReader" component={ScriptReaderScreen} options={{ title: 'Script Reader View' }} />
            <Stack.Screen name="Messaging" component={MessagingScreen} options={{ title: 'Messaging & Chat' }} />
            <Stack.Screen name="ResourceCenter" component={ResourceCenterScreen} options={{ title: 'Resource Center' }} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification Center' }} />
            <Stack.Screen name="ClientDiscovery" component={ClientDiscoveryScreen} options={{ title: 'Client Discovery Dashboard' }} />
            <Stack.Screen name="PostEventReview" component={PostEventReviewScreen} options={{ title: 'Post-Event Review' }} />
            <Stack.Screen name="EarningsWallet" component={EarningsWalletScreen} options={{ title: 'Earnings & Wallet' }} />
            <Stack.Screen name="MCPublicProfile" component={MCPublicProfileScreen} options={{ title: 'MC Public Profile' }} />
            <Stack.Screen name="ScriptLibrary" component={ScriptLibraryScreen} options={{ title: 'Script Library' }} />
            <Stack.Screen name="MCOnboarding" component={MCOnboardingScreen} options={{ title: 'MC Onboarding Wizard' }} />
            <Stack.Screen name="BookingCheckout" component={BookingCheckoutScreen} options={{ title: 'Booking & Escrow Checkout' }} />
            <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
