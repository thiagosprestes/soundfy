import React from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { playTrack } from '../modules/Home/slices/player';
import { Track } from '../modules/Home/types';
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

  const onChangeTrackPosition = async (value: number) => {
    await TrackPlayer.seekTo(value);
  };

  const onTogglePlayerState = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack === null) return;

    if (playbackState === State.Paused) await TrackPlayer.play();

    if (playbackState === State.Playing) await TrackPlayer.pause();
  };

  const onPlayTrack = async (track: Track, index: number) => {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      name: track.name,
      url: track.url,
      duration: track.duration,
    });
    await TrackPlayer.play();

    dispatch(playTrack({ track, index }));
  };

  // useEffect(() => {
  //   if (duration > 0 && duration === Math.round(position)) {
  //     onPlayTrack(tracks[playerTrackIndex + 1], playerTrackIndex + 1);
  //   }
  // }, [duration, position]);

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
