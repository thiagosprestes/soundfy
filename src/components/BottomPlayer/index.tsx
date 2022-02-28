import React from 'react';
import { TouchableOpacity } from 'react-native';

import OutlinedHeart from '../../assets/icons/outlined-heart.svg';
import Pause from '../../assets/icons/pause.svg';

import {
  Actions,
  Artist,
  Container,
  Cover,
  Info,
  Name,
  Player,
} from './styles';

interface BottomPlayerProps {
  onGoToPlayer: () => void;
}

const BottomPlayer = ({ onGoToPlayer }: BottomPlayerProps) => {
  const a = '';

  return (
    <Container onPress={onGoToPlayer}>
      <Player>
        <Cover
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/pt/3/36/Avengers_Endgame_trilha_sonora_capa.png',
          }}
        />
        <Info>
          <Name>Teste</Name>
          <Artist>Test</Artist>
        </Info>
        <Actions>
          <TouchableOpacity>
            <OutlinedHeart height={26} widht={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Pause />
          </TouchableOpacity>
        </Actions>
      </Player>
    </Container>
  );
};

export default BottomPlayer;
