import React from 'react';
import { Container, Greeting, ScrollView } from './styles';
import ItemsCarousel, {
  ItemsListType,
  ListType,
} from '../components/ItemsCarousel';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';
import { Track } from '../types';

interface HomeContainerProps {
  albums: ItemsListType[];
  artists: ItemsListType[];
  componentState: ComponentState;
  onGoToAlbum: (albumName: string) => void;
  onPlayTrack: (track: Track, index: number) => void;
  tracks: ItemsListType[];
  userName: string;
}

const HomeContainer = ({
  albums,
  artists,
  componentState,
  onGoToAlbum,
  onPlayTrack,
  tracks,
  userName,
}: HomeContainerProps) => {
  const renderDefault = (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 56 }}
    >
      <Greeting size={22}>Olá, {userName}</Greeting>
      <ItemsCarousel
        items={tracks}
        onItemAction={() => undefined}
        onPlayTrack={onPlayTrack}
        listType={ListType.Track}
        title="Músicas em destaque"
      />
      <ItemsCarousel
        isImageRounded
        onItemAction={onGoToAlbum}
        onPlayTrack={() => undefined}
        items={artists}
        listType={ListType.Artist}
        title="Artistas em destaque"
      />
      <ItemsCarousel
        items={albums}
        onItemAction={onGoToAlbum}
        onPlayTrack={() => undefined}
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
