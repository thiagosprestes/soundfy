import React from 'react';
import { Container, Greeting, ScrollView } from './styles';
import { Album, Artist } from '../types';
import ItemsCarousel from '../components/ItemsCarousel';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';

interface HomeContainerProps {
  albums: Album[];
  artists: Artist[];
  componentState: ComponentState;
}

const HomeContainer = ({
  albums,
  artists,
  componentState,
}: HomeContainerProps) => {
  const renderDefault = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Greeting size={22}>Olá, Luke Skywalker</Greeting>
      <ItemsCarousel items={albums} title="Músicas em destaque" />
      <ItemsCarousel
        isImageRounded
        items={artists}
        title="Artistas em destaque"
      />
      <ItemsCarousel items={albums} title="Trilhas sonoras inesquecíveis" />
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
