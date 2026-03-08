import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search, Calendar, MessageSquare, User } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

// Screens
import CustomerHomeScreen from '../screens/customer/CustomerHomeScreen';
import MCDiscoveryScreen from '../screens/customer/MCDiscoveryScreen';
import MyBookingsScreen from '../screens/customer/MyBookingsScreen';
import ProfileScreen from '../screens/shared/ProfileScreen';

import MCPublicProfileScreen from '../screens/customer/MCPublicProfileScreen';
import CreateBookingScreen from '../screens/customer/CreateBookingScreen';
import BookingCheckoutScreen from '../screens/customer/BookingCheckoutScreen';
import BookingDetailScreen from '../screens/customer/BookingDetailScreen';
import PostEventReviewScreen from '../screens/customer/PostEventReviewScreen';

import MessagingScreen from '../screens/shared/MessagingScreen';
import NotificationsScreen from '../screens/shared/NotificationsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomerTabs() {
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
                component={CustomerHomeScreen}
                options={{ tabBarLabel: 'Trang chủ', tabBarIcon: ({ color }) => <Home color={color} size={24} /> }}
            />
            <Tab.Screen
                name="TabDiscovery"
                component={MCDiscoveryScreen}
                options={{ tabBarLabel: 'Tìm MC', tabBarIcon: ({ color }) => <Search color={color} size={24} /> }}
            />
            <Tab.Screen
                name="TabBookings"
                component={MyBookingsScreen}
                options={{ tabBarLabel: 'Lịch Đặt', tabBarIcon: ({ color }) => <Calendar color={color} size={24} /> }}
            />
            <Tab.Screen
                name="TabProfile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Hồ sơ', tabBarIcon: ({ color }) => <User color={color} size={24} /> }}
            />
        </Tab.Navigator>
    );
}

export default function CustomerNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: COLORS.background } }}>
            <Stack.Screen name="CustomerRoot" component={CustomerTabs} />

            {/* Detail Screens */}
            <Stack.Screen name="MCPublicProfile" component={MCPublicProfileScreen} />
            <Stack.Screen name="CreateBooking" component={CreateBookingScreen} />
            <Stack.Screen name="BookingCheckout" component={BookingCheckoutScreen} />
            <Stack.Screen name="BookingDetail" component={BookingDetailScreen} />
            <Stack.Screen name="PostEventReview" component={PostEventReviewScreen} />
            <Stack.Screen name="Messaging" component={MessagingScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
    );
}
