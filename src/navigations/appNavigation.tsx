import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './types/navigationTypes';
import Home from '../modules/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.App.Home} component={Home} />
  </Stack.Navigator>
);

export default AppNavigation;
