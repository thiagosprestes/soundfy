import React from 'react';
import { Container, Icon, ItemContainer, Label } from './styles';
import HomeIcon from '../../assets/icons/home.svg';
import SearchIcon from '../../assets/icons/search.svg';
import LibraryIcon from '../../assets/icons/library.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import { colors } from '../../styles/styleguide';

interface BottomBarItemProps {
  icon: React.ReactChild;
  isFocused: boolean;
  label: string;
}

const BottomBar = ({ state, descriptors, navigation }) => {
  const BottomBarItem = ({ icon, isFocused, label }: BottomBarItemProps) => (
    <ItemContainer>
      {icon}
      <Label>{label}</Label>
    </ItemContainer>
  );

  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomBarItem
            isFocused={isFocused}
            icon={
              <HomeIcon fill={isFocused ? colors.secondaryBlue : colors.grey} />
            }
            label="Início"
          />
        );
      })}
    </Container>
  );
};

export default BottomBar;
