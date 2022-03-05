import React from 'react';
import { useDispatch } from 'react-redux';
import { usePlaybackState } from 'react-native-track-player';
import {
  Actions,
  Artist,
  BackButton,
  Container,
  Cover,
  Modal,
  PauseButton,
  PlayerData,
  PlayerProgress,
  Timestamp,
  Title,
} from './styles';
import Back from '../../assets/icons/back.svg';
import Previous from '../../assets/icons/previous.svg';
import Next from '../../assets/icons/next.svg';
import Pause from '../../assets/icons/pause.svg';
import { hidePlayer } from '../Home/slices/player';
import { colors } from '../../styles/styleguide';
import usePlayer from '../../hooks/usePlayer';

interface PlayerProps {
  isVisible: boolean;
}

const Player = ({ isVisible }: PlayerProps) => {
  const dispatch = useDispatch();
  const {
    onChangeTrackPosition,
    onTogglePlayerState,
    trackDuration,
    trackPosition,
  } = usePlayer();

  const currentTrackTimestamp = new Date(trackPosition * 1000)
    .toISOString()
    .slice(14, 19);

  const handleOnClosePlayer = () => {
    dispatch(hidePlayer());
  };

  return (
    <Modal visible={isVisible} onRequestClose={handleOnClosePlayer}>
      <Container>
        <BackButton onPress={handleOnClosePlayer}>
          <Back />
        </BackButton>
        <Cover
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/pt/3/36/Avengers_Endgame_trilha_sonora_capa.png',
          }}
        />
        <Title>Teste</Title>
        <Artist>Teste</Artist>
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
          <Previous />
          <PauseButton onPress={onTogglePlayerState}>
            <Pause height={30} width={30} />
          </PauseButton>
          <Next />
        </Actions>
      </Container>
    </Modal>
  );
};

export default Player;
