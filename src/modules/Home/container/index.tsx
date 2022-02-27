import React from 'react';
import { Container, Greeting, ScrollView } from './styles';
import ItemsCarousel, {
  ItemsListType,
  ListType,
} from '../components/ItemsCarousel';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';

interface HomeContainerProps {
  albums: ItemsListType[];
  artists: ItemsListType[];
  componentState: ComponentState;
  onGoToAlbum: (albumName: string) => void;
  songs: ItemsListType[];
  userName: string;
}

const HomeContainer = ({
  albums,
  artists,
  componentState,
  onGoToAlbum,
  songs,
  userName,
}: HomeContainerProps) => {
  const renderDefault = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Greeting size={22}>Olá, {userName}</Greeting>
      <ItemsCarousel
        items={songs}
        onGoToAlbum={onGoToAlbum}
        listType={ListType.Song}
        title="Músicas em destaque"
      />
      <ItemsCarousel
        isImageRounded
        onGoToAlbum={onGoToAlbum}
        items={artists}
        listType={ListType.Artist}
        title="Artistas em destaque"
      />
      <ItemsCarousel
        items={albums}
        onGoToAlbum={onGoToAlbum}
        listType={ListType.Album}
        title="Trilhas sonoras épicas"
      />
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
