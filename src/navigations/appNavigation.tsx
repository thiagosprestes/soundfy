import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './types/navigationTypes';
import Home from '../modules/Home';
import BottomBar from '../components/BottomBar';

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
  <Tab.Navigator
    tabBar={props => <BottomBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name={Routes.App.Home} component={Home} />
    <Tab.Screen name={Routes.App.Search} component={Home} />
  </Tab.Navigator>
);

export default AppNavigation;
