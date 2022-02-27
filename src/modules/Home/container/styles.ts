import styled from 'styled-components/native';
import SoundFy from '../../../assets/soundfy-logo.svg';
import { Text } from '../../../components/Text/styles';
import { colors, defaultPadding } from '../../../styles/styleguide';

export const Container = styled.View`
  background-color: ${colors.primaryBlue};
  padding-top: ${defaultPadding};
`;

export const ScrollView = styled.ScrollView``;

export const Greeting = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  margin-top: 24px;
  padding-left: ${defaultPadding};
`;
