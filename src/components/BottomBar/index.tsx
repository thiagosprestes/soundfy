/* eslint-disable consistent-return */
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Container, ItemContainer, Label } from './styles';
import HomeIcon from '../../assets/icons/home.svg';
import SearchIcon from '../../assets/icons/search.svg';
import { colors } from '../../styles/styleguide';
import { Routes } from '../../navigations/types/navigationTypes';

interface BottomBarItemProps extends BottomTabBarProps {}

const BottomBar = ({ navigation, state }: BottomBarItemProps) => {
  const BottomBarItem = () =>
    state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const iconColor = isFocused ? colors.secondaryBlue : colors.grey;

      const renderIconAndLabel = {
        [Routes.App.Home]: {
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
          <Label>{renderIconAndLabel.label}</Label>
        </ItemContainer>
      );
    });

  return <Container>{BottomBarItem()}</Container>;
};

export default BottomBar;
