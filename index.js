/**
 * @format
 */

import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import { name as appName } from './app.json';

// eslint-disable-next-line global-require
TrackPlayer.registerPlaybackService(() => require('./service'));

AppRegistry.registerComponent(appName, () => App);
