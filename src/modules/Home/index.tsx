import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeContainer from './container';
import { ComponentState } from '../../utils/globalTypes';
import albums from '../../utils/db/albums.json';
import artists from '../../utils/db/artists.json';
import songs from '../../utils/db/songs.json';
import { useAppSelector } from '../../store/hooks';
import { Routes } from '../../navigations/types/navigationTypes';
import { ItemsListType } from './components/ItemsCarousel';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({ navigation }: HomeProps) => {
  const [componentState, setComponentState] = useState(ComponentState.default);

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

  return (
    <HomeContainer
      albums={albums as ItemsListType[]}
      artists={artists as ItemsListType[]}
      componentState={componentState}
      onGoToAlbum={handleOnGoToAlbum}
      songs={songs as ItemsListType[]}
      userName={userName!}
    />
  );
};
export default Home;
