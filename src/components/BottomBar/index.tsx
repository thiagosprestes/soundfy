/* eslint-disable consistent-return */
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { CommonActions } from '@react-navigation/native';
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
import useLike from '../../hooks/useLike';
import { removeUserData } from '../../modules/Login/slices/user';

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

  const { handleOnToggleTrackLike, onVerifyTrackLiked } = useLike();

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
      }[route.name];

      const onPress = () => {
        if (!isFocused) {
          navigation.navigate(route.name);
        }
      };

      return (
        <ItemContainer onPress={onPress} key={renderIconAndLabel.label}>
          {renderIconAndLabel.icon}
          <Label color={iconColor}>{renderIconAndLabel.label}</Label>
        </ItemContainer>
      );
    });

  const handleOnGoToPlayer = () => {
    dispatch(showPlayer());
  };

  const handleOnLogout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: Routes.App.HomeStack.itself }],
        }),
      );

      dispatch(removeUserData());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!isPlayerShow && shouldShowBottomPlayer && (
        <BottomPlayer
          album={album}
          artist={artist}
          isTrackLiked={onVerifyTrackLiked}
          name={name}
          onGoToPlayer={handleOnGoToPlayer}
          onTogglePlayerState={onTogglePlayerState}
          onToggleTrackLike={handleOnToggleTrackLike}
          playbackState={playbackState}
        />
      )}
      <Container>
        {BottomBarItem()}
        <ItemContainer>
          <SearchIcon fill={colors.grey} />
          <Label>Buscar</Label>
        </ItemContainer>
        <ItemContainer>
          <Library fill={colors.grey} />
          <Label>Biblioteca</Label>
        </ItemContainer>
        <ItemContainer onPress={handleOnLogout}>
          <Settings fill={colors.grey} />
          <Label>Sair</Label>
        </ItemContainer>
      </Container>
    </>
  );
};

export default BottomBar;
