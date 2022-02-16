import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './types/navigationTypes';
import login from '../modules/login';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Auth.Login} component={login} />
  </Stack.Navigator>
);

export default AppNavigation;
