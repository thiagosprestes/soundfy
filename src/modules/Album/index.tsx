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

interface AlbumProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<StackParamList>;
}

const Album = ({ navigation, route }: AlbumProps) => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const { onPlayTrack } = usePlayer();

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

  const handleOnToggleAlbumLike = () => {};

  const handleOnToggleTrackLike = () => {};

  return (
    <AlbumContainer
      artist={albumData?.artist!}
      componentState={componentState}
      cover={albumData?.cover!}
      name={albumData?.name!}
      onBack={handleOnBack}
      onPlayAlbum={handleOnPlayAlbum}
      onToggleAlbumLike={handleOnToggleAlbumLike}
      onToggleTrackLike={handleOnToggleTrackLike}
      playingTrack={playingTrack}
      tracks={albumData?.tracks!}
    />
  );
};
export default Album;
