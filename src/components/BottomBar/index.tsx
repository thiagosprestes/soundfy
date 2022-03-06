/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Container, ItemContainer, Label } from './styles';
import HomeIcon from '../../assets/icons/home.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Library from '../../assets/icons/library.svg';
import Settings from '../../assets/icons/settings.svg';
import { colors } from '../../styles/styleguide';
import { Routes } from '../../navigations/types/navigationTypes';
import BottomPlayer from '../BottomPlayer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showPlayer } from '../../modules/Home/slices/player';
import usePlayer from '../../hooks/usePlayer';

interface BottomBarItemProps extends BottomTabBarProps {}

const BottomBar = ({ navigation, state }: BottomBarItemProps) => {
  const dispatch = useAppDispatch();

  const {
    album,
    artist,
    name,
    onTogglePlayerState,
    playbackState,
    shouldShowBottomPlayer,
  } = usePlayer();

  const isPlayerShow = useAppSelector(
    globalState => globalState.player.isOpened,
  );

  const BottomBarItem = () =>
    state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const iconColor = isFocused ? colors.secondaryBlue : colors.grey;

      const renderIconAndLabel = {
        [Routes.App.HomeStack.itself]: {
          icon: <HomeIcon fill={iconColor} />,
          label: 'Início',
        },
        [Routes.App.Search]: {
          icon: <SearchIcon fill={iconColor} />,
          label: 'Buscar',
        },
      }[route.name];

      const onPress = () => {
        if (!isFocused) {
          navigation.navigate(route.name);
        }
      };

      return (
        <ItemContainer onPress={onPress}>
          {renderIconAndLabel.icon}
          <Label color={iconColor}>{renderIconAndLabel.label}</Label>
        </ItemContainer>
      );
    });

  const handleOnGoToPlayer = () => {
    dispatch(showPlayer());
  };

  return (
    <>
      {!isPlayerShow && shouldShowBottomPlayer && (
        <BottomPlayer
          album={album}
          artist={artist}
          name={name}
          onGoToPlayer={handleOnGoToPlayer}
          onTogglePlayerState={onTogglePlayerState}
          playbackState={playbackState}
        />
      )}
      <Container>
        {BottomBarItem()}
        <ItemContainer>
          <Library fill={colors.grey} />
          <Label>Biblioteca</Label>
        </ItemContainer>
        <ItemContainer>
          <Settings fill={colors.grey} />
          <Label>Configurações</Label>
        </ItemContainer>
      </Container>
    </>
  );
};

export default BottomBar;
