import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations';
import { store } from './src/store';

function App() {
  useEffect(
    () => () => {
      TrackPlayer.destroy();
    },
    [],
  );

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <RootNavigation />
    </Provider>
  );
}

export default App;
