import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations';
import { store } from './src/store';

function App() {
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
