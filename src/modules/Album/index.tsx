import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AlbumContainer from './container';
import { ComponentState } from '../../utils/globalTypes';
import albums from '../../utils/db/albums.json';
import { StackParamList } from '../../navigations/types/routeParams';

interface AlbumProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<StackParamList>;
}

const Album = ({ navigation, route }: AlbumProps) => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const { albumName } = route.params!;

  const albumData = albums.find(album => album.name === albumName);

  const handleOnBack = () => {
    navigation.goBack();
  };

  const handleOnPlayAlbum = () => {};

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
      tracks={albumData?.tracks!}
    />
  );
};
export default Album;
