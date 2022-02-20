import styled from 'styled-components/native';
import { colors } from '../../styles/styleguide';
import { Text } from '../Text/styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AnimationContainer = styled.View`
  height: 120px;
  width: 120px;
  margin-bottom: 28px;
`;

export const Title = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
`;

export const Description = styled(Text)`
  text-align: center;
  margin-top: 12px;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  padding: 14px;
  width: 100%;
  align-items: center;
  background-color: ${colors.secondaryBlue};
  border-radius: 12px;
`;

export const ButtonText = styled(Text)`
  font-weight: bold;
  color: ${colors.primaryBlue};
`;
