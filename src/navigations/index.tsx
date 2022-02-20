import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import { useAppSelector } from '../store/hooks';

const RootNavigation = () => {
  const userData = useAppSelector(globalState => globalState.user);

  return (
    <NavigationContainer>
      {userData.displayName ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
