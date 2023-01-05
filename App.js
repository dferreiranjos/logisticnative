// Imports System
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useReducer, useState } from 'react';
import { Button, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import CSS
import { css } from './assets/css/Css'
// Imports Components
import Home from './views/Home'
import Login from './views/Login'

export default function App() {

    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
