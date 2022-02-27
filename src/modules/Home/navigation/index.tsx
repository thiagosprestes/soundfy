import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../../navigations/types/navigationTypes';
import Home from '..';
import Album from '../../Album';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.App.HomeStack.Home} component={Home} />
    <Stack.Screen name={Routes.App.Album} component={Album} />
  </Stack.Navigator>
);

export default HomeStack;
