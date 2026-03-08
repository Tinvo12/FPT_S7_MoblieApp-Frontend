import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, CalendarClock, Wallet, BookOpen, Mic } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

// Screens
import MCDashboardScreen from '../screens/mc/MCDashboardScreen';
import MCScheduleScreen from '../screens/mc/MCScheduleScreen';
import EarningsWalletScreen from '../screens/mc/EarningsWalletScreen';
import ScriptLibraryScreen from '../screens/mc/ScriptLibraryScreen';
import VoiceCoachHomeScreen from '../screens/mc/VoiceCoachHomeScreen';
import PracticeSessionScreen from '../screens/mc/PracticeSessionScreen';
import FeedbackResultScreen from '../screens/mc/FeedbackResultScreen';
import ScriptReaderScreen from '../screens/mc/ScriptReaderScreen';
import MCBookingsScreen from '../screens/mc/MCBookingsScreen';
import MCOnboardingScreen from '../screens/mc/MCOnboardingScreen';

import ProfileScreen from '../screens/shared/ProfileScreen';
import MessagingScreen from '../screens/shared/MessagingScreen';
import NotificationsScreen from '../screens/shared/NotificationsScreen';
import BookingDetailScreen from '../screens/customer/BookingDetailScreen'; // Reused for viewing details

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MCTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.surface,
                    borderTopColor: COLORS.border,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: COLORS.brand,
                tabBarInactiveTintColor: COLORS.textSecondary,
            }}
        >
            <Tab.Screen
                name="TabHome"
                component={MCDashboardScreen}
                options={{ tabBarLabel: 'Tổng quan', tabBarIcon: ({ color }) => <Home color={color} size={24} /> }}
            />
            <Tab.Screen
                name="TabSchedule"
                component={MCScheduleScreen}
                options={{ tabBarLabel: 'Lịch Trình', tabBarIcon: ({ color }) => <CalendarClock color={color} size={24} /> }}
            />
            <Tab.Screen
                name="TabScripts"
                component={ScriptLibraryScreen}
                options={{ tabBarLabel: 'Kịch Bản', tabBarIcon: ({ color }) => <BookOpen color={color} size={24} /> }}
            />
            <Tab.Screen
                name="TabWallet"
                component={EarningsWalletScreen}
                options={{ tabBarLabel: 'Ví Thu Nhập', tabBarIcon: ({ color }) => <Wallet color={color} size={24} /> }}
            />
        </Tab.Navigator>
    );
}

export default function MCNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: COLORS.background } }}>
            <Stack.Screen name="MCRoot" component={MCTabs} />

            {/* Detail Screens */}
            <Stack.Screen name="MCOnboarding" component={MCOnboardingScreen} />
            <Stack.Screen name="MCBookings" component={MCBookingsScreen} />
            <Stack.Screen name="VoiceCoachHome" component={VoiceCoachHomeScreen} />
            <Stack.Screen name="PracticeSession" component={PracticeSessionScreen} />
            <Stack.Screen name="FeedbackResult" component={FeedbackResultScreen} />
            <Stack.Screen name="ScriptReader" component={ScriptReaderScreen} />

            {/* Shared / Reusable */}
            <Stack.Screen name="BookingDetail" component={BookingDetailScreen} />
            <Stack.Screen name="Messaging" component={MessagingScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
