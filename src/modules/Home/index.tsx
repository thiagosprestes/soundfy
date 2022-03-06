import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeContainer from './container';
import { ComponentState } from '../../utils/globalTypes';
import albums from '../../utils/db/albums.json';
import artists from '../../utils/db/artists.json';
import tracks from '../../utils/db/tracks.json';
import { useAppSelector } from '../../store/hooks';
import { Routes } from '../../navigations/types/navigationTypes';
import { ItemsListType } from './components/ItemsCarousel';
import { Track } from './types';
import usePlayer from '../../hooks/usePlayer';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({ navigation }: HomeProps) => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const { onPlayTrack } = usePlayer();

  const userName = useAppSelector(globalState => globalState.user.displayName);

  const handleOnGoToAlbum = (albumName: string) => {
    if (albumName === 'Black Panther') {
      navigation.navigate(Routes.App.HomeStack.itself, {
        screen: Routes.App.HomeStack.Album,
        params: {
          albumName,
        },
      });
    }
  };

  const handleOnPlayTrack = (track: Track, index: number) => {
    onPlayTrack(track, index);
  };

  return (
    <HomeContainer
      albums={albums as unknown as ItemsListType[]}
      artists={artists as ItemsListType[]}
      componentState={componentState}
      onGoToAlbum={handleOnGoToAlbum}
      onPlayTrack={handleOnPlayTrack}
      tracks={tracks as ItemsListType[]}
      userName={userName!}
    />
  );
};
export default Home;
