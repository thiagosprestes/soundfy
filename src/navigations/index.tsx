import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import { useAppSelector } from '../store/hooks';
import Player from '../modules/Player';

const RootNavigation = () => {
  const userData = useAppSelector(globalState => globalState.user);
  const isPlayerShow = useAppSelector(
    globalState => globalState.player.isOpened,
  );

  return (
    <NavigationContainer>
      {userData.displayName ? (
        <>
          <Player isVisible={isPlayerShow} />
          <AppNavigation />
        </>
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
