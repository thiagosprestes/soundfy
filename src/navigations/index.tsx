import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './authNavigation';

const RootNavigation = () => (
  <NavigationContainer>
    <AuthNavigation />
  </NavigationContainer>
);

export default RootNavigation;
