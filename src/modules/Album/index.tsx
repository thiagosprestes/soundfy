import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AlbumContainer from './container';
import { ComponentState } from '../../utils/globalTypes';
import albums from '../../utils/db/albums.json';
import { StackParamList } from '../../navigations/types/routeParams';
import usePlayer from '../../hooks/usePlayer';
import { Track } from '../Home/types';
import { useAppSelector } from '../../store/hooks';
import useLike from '../../hooks/useLike';

interface AlbumProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<StackParamList>;
}

const Album = ({ navigation, route }: AlbumProps) => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const { onPlayTrack } = usePlayer();

  const {
    handleOnToggleAlbumLike,
    handleOnToggleTrackLike,
    onVerifyAlbumLiked,
    onVerifyTrackLiked,
  } = useLike();

  const { albumName } = route.params!;

  const playingTrack = useAppSelector(globalState => globalState.player.track);

  const albumData = albums.find(album => album.name === albumName);

  const handleOnBack = () => {
    navigation.goBack();
  };

  const handleOnPlayAlbum = () => {
    const findTrack = albumData!.tracks && albumData!.tracks[2];

    const track = {
      name: findTrack?.name,
      artist: findTrack?.artist,
      album: albumData,
      duration: findTrack?.duration,
      url: findTrack?.url,
    };

    onPlayTrack(track as Track, 2);
  };

  const handleOnPlayTrack = (track: Track) => {
    const trackData = {
      name: track?.name,
      artist: track?.artist,
      album: albumData,
      duration: track?.duration,
      url: track?.url,
    };

    onPlayTrack(trackData as Track, 2);
  };

  return (
    <AlbumContainer
      artist={albumData?.artist!}
      componentState={componentState}
      cover={albumData?.cover!}
      isAlbumLiked={onVerifyAlbumLiked}
      isTrackLiked={onVerifyTrackLiked}
      name={albumData?.name!}
      onBack={handleOnBack}
      onPlayAlbum={handleOnPlayAlbum}
      onPlayTrack={handleOnPlayTrack}
      onToggleAlbumLike={handleOnToggleAlbumLike}
      onToggleTrackLike={handleOnToggleTrackLike}
      playingTrack={playingTrack}
      tracks={albumData?.tracks!}
    />
  );
};
export default Album;
