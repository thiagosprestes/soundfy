import styled from 'styled-components/native';
import SoundFy from '../../../assets/soundfy-logo.svg';
import { Text } from '../../../components/Text/styles';
import { colors, defaultPadding } from '../../../styles/styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBlue};
  padding: ${defaultPadding};
`;

export const Greeting = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  margin-top: 24px;
`;
