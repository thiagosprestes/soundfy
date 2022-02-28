import React from 'react';
import { useDispatch } from 'react-redux';
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

interface PlayerProps {
  isVisible: boolean;
}

const Player = ({ isVisible }: PlayerProps) => {
  const dispatch = useDispatch();

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
          <Timestamp>0:00</Timestamp>
          <PlayerProgress />
          <Timestamp>0:00</Timestamp>
        </PlayerData>
        <Actions>
          <Previous />
          <PauseButton>
            <Pause height={30} width={30} />
          </PauseButton>
          <Next />
        </Actions>
      </Container>
    </Modal>
  );
};

export default Player;
