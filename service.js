// eslint-disable-next-line import/no-import-module-exports
import TrackPlayer from 'react-native-track-player';

// service.js
module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

  // ...
};
