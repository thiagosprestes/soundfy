import React from 'react';
import { useDispatch } from 'react-redux';
import { State } from 'react-native-track-player';
import { TouchableOpacity } from 'react-native';
import {
  Actions,
  Artist,
  BackButton,
  Container,
  Cover,
  Modal,
  TogglePlaybackStateButton,
  PlayerData,
  PlayerProgress,
  Timestamp,
  Title,
  ModalBody,
  TrackInfo,
} from './styles';
import Back from '../../assets/icons/back.svg';
import Previous from '../../assets/icons/previous.svg';
import Next from '../../assets/icons/next.svg';
import Pause from '../../assets/icons/pause.svg';
import Play from '../../assets/icons/play.svg';
import { hidePlayer } from '../Home/slices/player';
import { colors } from '../../styles/styleguide';
import usePlayer from '../../hooks/usePlayer';
import tracks from '../../utils/db/tracks.json';
import { useAppSelector } from '../../store/hooks';

interface PlayerProps {
  isVisible: boolean;
}

const Player = ({ isVisible }: PlayerProps) => {
  const dispatch = useDispatch();

  const {
    album,
    artist,
    name,
    onChangeTrackPosition,
    onTogglePlayerState,
    onPlayTrack,
    playbackState,
    trackDuration,
    trackPosition,
  } = usePlayer();

  const { index } = useAppSelector(globalState => globalState.player);

  const currentTrackTimestamp = new Date(trackPosition * 1000)
    .toISOString()
    .slice(14, 19);

  const handleOnClosePlayer = () => {
    dispatch(hidePlayer());
  };

  const onSkipToNext = () => {
    onPlayTrack(tracks[index + 1], index + 1);
  };

  const onSkipToPrevious = () => {
    onPlayTrack(tracks[index - 1], index - 1);
  };

  return (
    <Modal visible={isVisible} onRequestClose={handleOnClosePlayer}>
      <Container>
        <BackButton onPress={handleOnClosePlayer}>
          <Back />
        </BackButton>
        <ModalBody>
          <Cover
            source={{
              uri: album && album.cover,
            }}
          />
          <TrackInfo>
            <Title>{name}</Title>
            <Artist>{artist}</Artist>
            <PlayerData>
              <Timestamp>{currentTrackTimestamp}</Timestamp>
              <PlayerProgress
                value={trackPosition}
                minimumValue={0}
                maximumValue={trackDuration}
                thumbTintColor={colors.white}
                minimumTrackTintColor={colors.secondaryBlue}
                maximumTrackTintColor={colors.white}
                onSlidingComplete={async value => {
                  await onChangeTrackPosition(value);
                }}
              />
              <Timestamp>
                {new Date(trackDuration * 1000).toISOString().slice(14, 19)}
              </Timestamp>
            </PlayerData>
            <Actions>
              <TouchableOpacity onPress={onSkipToPrevious}>
                <Previous />
              </TouchableOpacity>
              <TogglePlaybackStateButton onPress={onTogglePlayerState}>
                {playbackState === State.Paused ? (
                  <Play height={30} width={30} />
                ) : (
                  <Pause height={30} width={30} />
                )}
              </TogglePlaybackStateButton>
              <TouchableOpacity onPress={onSkipToNext}>
                <Next />
              </TouchableOpacity>
            </Actions>
          </TrackInfo>
        </ModalBody>
      </Container>
    </Modal>
  );
};

export default Player;
