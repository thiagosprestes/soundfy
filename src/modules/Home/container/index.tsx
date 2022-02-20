import React from 'react';
import { Container, Greeting, ScrollView } from './styles';
import { Album, Artist, Song } from '../types';
import ItemsCarousel from '../components/ItemsCarousel';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';

interface HomeContainerProps {
  albums: Album[];
  artists: Artist[];
  songs: Song[];
  componentState: ComponentState;
}

const HomeContainer = ({
  albums,
  artists,
  componentState,
  songs,
}: HomeContainerProps) => {
  const renderDefault = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Greeting size={22}>Olá, Luke Skywalker</Greeting>
      <ItemsCarousel items={songs} title="Músicas em destaque" />
      <ItemsCarousel
        isImageRounded
        items={artists}
        title="Artistas em destaque"
      />
      <ItemsCarousel items={albums} title="Trilhas sonoras épicas" />
    </ScrollView>
  );

  const renderLoading = <Loading />;

  const renderError = <Error onRetry={() => undefined} />;

  return (
    <Container>
      {
        {
          [ComponentState.default]: renderDefault,
          [ComponentState.loading]: renderLoading,
          [ComponentState.error]: renderError,
        }[componentState]
      }
    </Container>
  );
};

export default HomeContainer;
