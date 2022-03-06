import React, { useEffect } from 'react';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { playTrack } from '../modules/Home/slices/player';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import tracks from '../utils/db/tracks.json';

const usePlayer = () => {
  const { album, artist, name } = useAppSelector(
    globalState => globalState.player.track,
  );

  const playerTrackIndex = useAppSelector(
    globalState => globalState.player.index,
  );

  const playbackState = usePlaybackState();

  const { duration, position } = useProgress();

  const dispatch = useAppDispatch();

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause],
    });
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

  const onPlayTrack = async (index: number) => {
    const track = tracks[index];

    await TrackPlayer.reset();
    await TrackPlayer.add({
      name: track.name,
      url: track.url,
      duration: track.duration,
    });
    await TrackPlayer.play();

    dispatch(playTrack({ track, index }));
  };

  useEffect(() => {
    setupPlayer();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  useEffect(() => {
    if (duration > 0 && duration === Math.round(position)) {
      onPlayTrack(playerTrackIndex + 1);
    }
  }, [duration, position]);

  return {
    album,
    artist,
    name,
    onChangeTrackPosition,
    onTogglePlayerState,
    onPlayTrack,
    playbackState,
    trackDuration: duration,
    trackPosition: position,
    shouldShowBottomPlayer: Boolean(name),
  };
};

export default usePlayer;
