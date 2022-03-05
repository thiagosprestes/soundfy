import React, { useEffect } from 'react';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { playTrack } from '../modules/Home/slices/player';
import { Track } from '../modules/Home/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const songs = [
  {
    name: 'Welcome to Jurassic Park',
    url: 'https://cdns-preview-0.dzcdn.net/stream/c-0a2b770685c947bc1b1d9d470b7813c2-7.mp3',
    duration: 31,
  },
  {
    name: 'Portals',
    url: 'https://cdns-preview-9.dzcdn.net/stream/c-9875690563c916b856769ade1f6c6217-8.mp3',
    duration: 31,
  },
  {
    name: 'Duel of the Fates',
    url: 'https://cdns-preview-0.dzcdn.net/stream/c-520b3cbaee9b51d9b97a61f52bde7f85-6.mp3',
    duration: 31,
  },
  {
    name: 'S.T.A.Y',
    url: 'https://cdns-preview-0.dzcdn.net/stream/c-23694bcacc0b1204a099bc23a21d882b-5.mp3',
    duration: 31,
  },
  {
    name: 'Arrive to Earth',
    url: 'https://cdns-preview-0.dzcdn.net/stream/c-ea472dc4ae3be27593f5fa3e827e231d-8.mp3',
    duration: 31,
  },
];

const usePlayer = () => {
  const { album, artist, name } = useAppSelector(
    globalState => globalState.player.track,
  );

  const playbackState = usePlaybackState();

  const { duration, position } = useProgress();

  const dispatch = useAppDispatch();

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause],
    });
    await TrackPlayer.add(songs);
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);

      const { title, artwork, artist } = track;

      // dispatch(playTrack({ track, index }));
    }
  });

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
    await TrackPlayer.skip(index);
    await TrackPlayer.play();

    dispatch(playTrack({ track, index }));
  };

  const onSkipTo = async (index: number, track: Track) => {
    console.log('h', index);
    await TrackPlayer.skip(index);

    dispatch(playTrack({ track, index }));
  };

  useEffect(() => {
    setupPlayer();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  return {
    album,
    artist,
    name,
    onChangeTrackPosition,
    onTogglePlayerState,
    onPlayTrack,
    onSkipTo,
    playbackState,
    trackDuration: duration,
    trackPosition: position,
    shouldShowBottomPlayer: Boolean(name),
  };
};

export default usePlayer;
