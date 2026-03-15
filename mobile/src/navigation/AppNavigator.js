import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../constants/theme';

// Auth Screens
import PublicLandingScreen from '../screens/PublicLandingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// Main Screens
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
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
import MyBookingsScreen from '../screens/MyBookingsScreen';
import MCDiscoveryScreen from '../screens/MCDiscoveryScreen';
import EditMCProfileScreen from '../screens/mc/EditMCProfileScreen';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const screenOptionsBase = {
    headerStyle: { backgroundColor: COLORS.brand },
    headerTintColor: COLORS.white,
    cardStyle: { backgroundColor: COLORS.background },
    headerTitleStyle: { fontWeight: 'bold' }
};

function AuthNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="PublicLanding" screenOptions={screenOptionsBase}>
            <AuthStack.Screen name="PublicLanding" component={PublicLandingScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
}

function MainNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Dashboard" screenOptions={screenOptionsBase}>
            <MainStack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'MC Dashboard', headerLeft: () => null }} />
            <MainStack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings & Verification' }} />
            <MainStack.Screen name="ScriptReader" component={ScriptReaderScreen} options={{ title: 'Script Reader View' }} />
            <MainStack.Screen name="Messaging" component={MessagingScreen} options={{ title: 'Messaging & Chat' }} />
            <MainStack.Screen name="ResourceCenter" component={ResourceCenterScreen} options={{ title: 'Resource Center' }} />
            <MainStack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification Center' }} />
            <MainStack.Screen name="ClientDiscovery" component={ClientDiscoveryScreen} options={{ title: 'Client Discovery Dashboard' }} />
            <MainStack.Screen name="PostEventReview" component={PostEventReviewScreen} options={{ title: 'Post-Event Review' }} />
            <MainStack.Screen name="EarningsWallet" component={EarningsWalletScreen} options={{ title: 'Earnings & Wallet' }} />
            <MainStack.Screen name="MCPublicProfile" component={MCPublicProfileScreen} options={{ title: 'MC Public Profile' }} />
            <MainStack.Screen name="ScriptLibrary" component={ScriptLibraryScreen} options={{ title: 'Script Library' }} />
            <MainStack.Screen name="MCOnboarding" component={MCOnboardingScreen} options={{ title: 'MC Onboarding Wizard' }} />
            <MainStack.Screen name="BookingCheckout" component={BookingCheckoutScreen} options={{ title: 'Booking & Escrow Checkout' }} />
            <MainStack.Screen name="MyBookings" component={MyBookingsScreen} options={{ title: 'My Bookings & Events' }} />
            <MainStack.Screen name="MCDiscovery" component={MCDiscoveryScreen} options={{ title: 'Explore MCs' }} />
            <MainStack.Screen name="EditMCProfile" component={EditMCProfileScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
        </MainStack.Navigator>
    );
}

// Temporary RootStack that nests Auth and Main so we don't break simple navigation flows yet without a full AuthProvider
export default function AppNavigator() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Auth" component={AuthNavigator} />
            <RootStack.Screen name="Main" component={MainNavigator} />
            
            {/* Keeping old references so we don't break existing `navigation.navigate('Login')` etc... We can clean this up properly later by using Auth Context */}
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="Register" component={RegisterScreen} />
            <RootStack.Screen name="Dashboard" component={DashboardScreen} />
            <RootStack.Screen name="Settings" component={SettingsScreen} />
            <RootStack.Screen name="ScriptReader" component={ScriptReaderScreen} />
            <RootStack.Screen name="Messaging" component={MessagingScreen} />
            <RootStack.Screen name="ResourceCenter" component={ResourceCenterScreen} />
            <RootStack.Screen name="Notification" component={NotificationScreen} />
            <RootStack.Screen name="ClientDiscovery" component={ClientDiscoveryScreen} />
            <RootStack.Screen name="PostEventReview" component={PostEventReviewScreen} />
            <RootStack.Screen name="EarningsWallet" component={EarningsWalletScreen} />
            <RootStack.Screen name="MCPublicProfile" component={MCPublicProfileScreen} />
            <RootStack.Screen name="ScriptLibrary" component={ScriptLibraryScreen} />
            <RootStack.Screen name="MCOnboarding" component={MCOnboardingScreen} />
            <RootStack.Screen name="BookingCheckout" component={BookingCheckoutScreen} />
            <RootStack.Screen name="MyBookings" component={MyBookingsScreen} />
            <RootStack.Screen name="MCDiscovery" component={MCDiscoveryScreen} />
            <RootStack.Screen name="EditMCProfile" component={EditMCProfileScreen} />
            <RootStack.Screen name="Success" component={SuccessScreen} />
        </RootStack.Navigator>
    );
}
