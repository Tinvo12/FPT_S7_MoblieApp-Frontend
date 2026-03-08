import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLES } from '../constants/roles';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState(null); // Includes role

    useEffect(() => {
        bootstrapAsync();
    }, []);

    const bootstrapAsync = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('userToken');
            const storedUser = await AsyncStorage.getItem('userData');

            if (storedToken && storedUser) {
                setUserToken(storedToken);
                setUserData(JSON.parse(storedUser));
            }
        } catch (e) {
            console.warn("Restore token failed", e);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (token, user) => {
        try {
            await AsyncStorage.setItem('userToken', token);
            await AsyncStorage.setItem('userData', JSON.stringify(user));
            setUserToken(token);
            setUserData(user);
        } catch (e) {
            console.error("Login save error", e);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userData');
            setUserToken(null);
            setUserData(null);
        } catch (e) {
            console.error("Logout clear error", e);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoading, userToken, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
