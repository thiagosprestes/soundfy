import React, { useEffect } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

const songs = [
  {
    name: 'Vrau',
    // eslint-disable-next-line global-require
    url: require('../assets/tracks/portals.wav'),
    duration: 203,
  },
];

const usePlayer = () => {
  const playbackState = usePlaybackState();
  const { duration, position } = useProgress();

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songs);
  };

  const onChangeTrackPosition = async (value: number) => {
    await TrackPlayer.seekTo(value);
  };

  const onTogglePlayerState = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack === null) return;

    if (playbackState === State.Paused) await TrackPlayer.play();

    if (playbackState === State.Playing) await TrackPlayer.pause();
  };

  useEffect(() => {
    setupPlayer();
  }, []);

  return {
    onChangeTrackPosition,
    onTogglePlayerState,
    trackDuration: duration,
    trackPosition: position,
  };
};

export default usePlayer;
