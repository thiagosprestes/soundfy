import styled from 'styled-components/native';
import SoundFy from '../../../assets/soundfy-logo.svg';
import { Text } from '../../../components/Text/styles';
import { colors, defaultPadding } from '../../../styles/styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBlue};
  justify-content: center;
  padding: ${defaultPadding};
`;

export const SoundFyLogo = styled(SoundFy)`
  margin-bottom: 42px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 25px;
  padding: 7px 12px;
  margin-bottom: 18px;
`;

export const ButtonText = styled(Text)`
  color: ${colors.grey};
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
