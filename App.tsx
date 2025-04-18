import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import TrackPlayer, { Capability } from 'react-native-track-player';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './src/navigations';
import { store } from './src/store';

function App() {
  const setupPlayer = async () => {
    let isPlayerInitialized = false;

    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause],
      });

      isPlayerInitialized = true;
    } catch (e) {
      // intentionally leaved as blank
    }
  };

  useEffect(() => {
    setupPlayer();

    return () => {
      TrackPlayer.reset();
    };
  }, []);

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
