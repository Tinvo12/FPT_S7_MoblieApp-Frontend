import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutDashboard, Users, FileCheck, LogOut } from 'lucide-react-native';
import { COLORS } from '../constants/theme';

// Screens
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import UserManagementScreen from '../screens/admin/UserManagementScreen';
import TransactionApprovalScreen from '../screens/admin/TransactionApprovalScreen';
import ProfileScreen from '../screens/shared/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AdminTabs() {
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
                tabBarActiveTintColor: COLORS.danger, // Distinct danger red for Admin root
                tabBarInactiveTintColor: COLORS.textSecondary,
            }}
        >
            <Tab.Screen
                name="AdminDash"
                component={AdminDashboardScreen}
                options={{ tabBarLabel: 'Hệ Thống', tabBarIcon: ({ color }) => <LayoutDashboard color={color} size={24} /> }}
            />
            <Tab.Screen
                name="UserMgmt"
                component={UserManagementScreen}
                options={{ tabBarLabel: 'Người Dùng', tabBarIcon: ({ color }) => <Users color={color} size={24} /> }}
            />
            <Tab.Screen
                name="Transactions"
                component={TransactionApprovalScreen}
                options={{ tabBarLabel: 'Giao Dịch', tabBarIcon: ({ color }) => <FileCheck color={color} size={24} /> }}
            />
            <Tab.Screen
                name="AdminProfile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Tài khoản', tabBarIcon: ({ color }) => <LogOut color={color} size={24} /> }}
            />
        </Tab.Navigator>
    );
}

export default function AdminNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: COLORS.background } }}>
            <Stack.Screen name="AdminRoot" component={AdminTabs} />
        </Stack.Navigator>
    );
}
