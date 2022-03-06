import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './types/navigationTypes';
import Home from '../modules/Home';
import BottomBar from '../components/BottomBar';
import HomeStack from '../modules/Home/navigation';

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
  <Tab.Navigator
    tabBar={props => <BottomBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name={Routes.App.HomeStack.itself} component={HomeStack} />
  </Tab.Navigator>
);

export default AppNavigation;
