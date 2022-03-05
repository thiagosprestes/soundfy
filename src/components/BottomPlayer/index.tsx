import React from 'react';
import { TouchableOpacity } from 'react-native';
import { State } from 'react-native-track-player';
import OutlinedHeart from '../../assets/icons/outlined-heart.svg';
import Pause from '../../assets/icons/pause.svg';
import Play from '../../assets/icons/play.svg';
import { Album } from '../../modules/Home/types';

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
  album: Album;
  artist?: string;
  name: string;
  onGoToPlayer: () => void;
  onTogglePlayerState: () => void;
  playbackState: State;
}

const BottomPlayer = ({
  album,
  artist,
  name,
  onGoToPlayer,
  onTogglePlayerState,
  playbackState,
}: BottomPlayerProps) => (
  <Container>
    <Player onPress={onGoToPlayer}>
      <Cover
        source={{
          uri: album?.cover!,
        }}
      />
      <Info>
        <Name numberOfLines={1}>{name}</Name>
        <Artist numberOfLines={1}>{artist}</Artist>
      </Info>
      <Actions>
        <TouchableOpacity>
          <OutlinedHeart height={26} widht={26} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onTogglePlayerState}>
          {playbackState === State.Playing ? (
            <Pause />
          ) : (
            <Play height={18} width={18} />
          )}
        </TouchableOpacity>
      </Actions>
    </Player>
  </Container>
);

export default BottomPlayer;
