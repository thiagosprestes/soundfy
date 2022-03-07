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
  Track,
  TrackInfo,
  Tracks,
} from './styles';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';
import Back from '../../../assets/icons/back.svg';
import OutlinedHeart from '../../../assets/icons/outlined-heart.svg';
import Heart from '../../../assets/icons/heart.svg';
import Play from '../../../assets/icons/play-background.svg';
import { AlbumTrack, Track as TrackI } from '../../Home/types';

interface AlbumContainerProps {
  artist: string;
  componentState: ComponentState;
  cover: string;
  isAlbumLiked: (albumName: string) => boolean;
  isTrackLiked: (trackName: string) => boolean;
  name: string;
  onBack: () => void;
  onPlayAlbum: () => void;
  onPlayTrack: (track: TrackI) => void;
  onToggleAlbumLike: (albumName: string) => void;
  onToggleTrackLike: (trackName: string) => void;
  playingTrack: TrackI;
  tracks: AlbumTrack[];
}

const AlbumContainer = ({
  artist,
  componentState,
  cover,
  isAlbumLiked,
  isTrackLiked,
  name,
  onBack,
  onPlayAlbum,
  onPlayTrack,
  onToggleAlbumLike,
  onToggleTrackLike,
  playingTrack,
  tracks,
}: AlbumContainerProps) => {
  const renderDefault = (
    <Tracks
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
                  {isAlbumLiked(name) ? (
                    <Heart height={40} width={40} />
                  ) : (
                    <OutlinedHeart />
                  )}
                </Action>
              </AlbumActions>
            </AlbumHeader>
          </Gradient>
        </Background>
      )}
      keyExtractor={item => item.name}
      data={tracks}
      renderItem={({ item }) => (
        <Track onPress={() => onPlayTrack(item as TrackI)}>
          <TrackInfo>
            <Name isPlaying={playingTrack.name === item.name}>{item.name}</Name>
            <Artist isPlaying={playingTrack.name === item.name}>
              {item.artist}
            </Artist>
          </TrackInfo>
          <TouchableOpacity onPress={() => onToggleTrackLike(item.name)}>
            {isTrackLiked(item.name) ? (
              <Heart height={24} width={24} />
            ) : (
              <OutlinedHeart height={24} width={24} />
            )}
          </TouchableOpacity>
        </Track>
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
