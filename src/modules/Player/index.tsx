import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { State } from 'react-native-track-player';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { Track } from '../Home/types';
import { useAppSelector } from '../../store/hooks';

interface PlayerProps {
  isVisible: boolean;
}

const Player = ({ isVisible }: PlayerProps) => {
  const dispatch = useDispatch();

  const {
    onChangeTrackPosition,
    onTogglePlayerState,
    onPlayTrack,
    onSkipTo,
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

  const { width } = Dimensions.get('window');

  const [trackIndex, setTrackIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const trackSlider = useRef<any>(null);

  const onSkipToNext = () => {
    trackSlider.current.scrollToOffset({
      offset: (trackIndex + 1) * width,
    });
  };

  const onSkipToPrevious = () => {
    trackSlider.current.scrollToOffset({
      offset: (trackIndex - 1) * width,
    });
  };

  useEffect(() => {
    if (index) setTrackIndex(index);
  }, [index]);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      onSkipTo(index, tracks[index] as Track);
      setTrackIndex(index);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  return (
    <Modal visible={isVisible} onRequestClose={handleOnClosePlayer}>
      <Container>
        <BackButton onPress={handleOnClosePlayer}>
          <Back />
        </BackButton>
        <ModalBody>
          <View>
            <Animated.FlatList
              ref={trackSlider}
              data={tracks}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Cover
                    source={{
                      uri: tracks[trackIndex].album.cover,
                    }}
                  />
                </View>
              )}
              keyExtractor={item => item.name}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: { x: scrollX },
                    },
                  },
                ],
                { useNativeDriver: true },
              )}
            />
          </View>
          <TrackInfo>
            <Title>{tracks[trackIndex].name}</Title>
            <Artist>{tracks[trackIndex].artist}</Artist>
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
