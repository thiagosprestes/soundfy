import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  AlbumArtist,
  AlbumHeader,
  AlbumName,
  BackButton,
  Background,
  Container,
  Gradient,
  AlbumActions,
  Action,
  Artist,
  Name,
  Song,
  SongInfo,
  Songs,
} from './styles';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';
import Back from '../../../assets/icons/back.svg';
import OutlinedHeart from '../../../assets/icons/outlined-heart.svg';
import Play from '../../../assets/icons/play-background.svg';
import { AlbumSong } from '../../Home/types';

interface AlbumContainerProps {
  artist: string;
  componentState: ComponentState;
  cover: string;
  name: string;
  onBack: () => void;
  onPlayAlbum: () => void;
  onToggleAlbumLike: (albumName: string) => void;
  onToggleSongLike: (songName: string) => void;
  songs: AlbumSong[];
}

const AlbumContainer = ({
  artist,
  componentState,
  cover,
  name,
  onBack,
  onPlayAlbum,
  onToggleAlbumLike,
  onToggleSongLike,
  songs,
}: AlbumContainerProps) => {
  const renderDefault = (
    <Songs
      contentContainerStyle={{ paddingBottom: 56 }}
      ListHeaderComponent={() => (
        <Background
          source={{
            uri: cover,
          }}
        >
          <Gradient colors={['transparent', '#00001c']}>
            <AlbumHeader>
              <BackButton onPress={onBack}>
                <Back />
              </BackButton>
              <AlbumName>{name}</AlbumName>
              <AlbumArtist>{artist}</AlbumArtist>
              <AlbumActions>
                <Action onPress={onPlayAlbum}>
                  <Play />
                </Action>
                <Action onPress={() => onToggleAlbumLike(name)}>
                  <OutlinedHeart />
                </Action>
              </AlbumActions>
            </AlbumHeader>
          </Gradient>
        </Background>
      )}
      keyExtractor={item => item.name}
      data={songs}
      renderItem={({ item }) => (
        <Song>
          <SongInfo>
            <Name>{item.name}</Name>
            <Artist>{item.artist}</Artist>
          </SongInfo>
          <TouchableOpacity onPress={() => onToggleSongLike(item.name)}>
            <OutlinedHeart height={24} width={24} />
          </TouchableOpacity>
        </Song>
      )}
    />
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

export default AlbumContainer;
