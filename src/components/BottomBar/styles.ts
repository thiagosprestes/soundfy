import styled from 'styled-components/native';
import { colors } from '../../styles/styleguide';
import { Text } from '../Text/styles';

interface LabelProps {
  color?: string;
}

export const Container = styled.View`
  flex-direction: row;
  padding: 0 40px;
  justify-content: space-evenly;
  background-color: ${colors.primaryBlue};
  padding: 8px;
`;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const Icon = styled.View`
  align-items: center;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color ?? colors.grey};
  margin-top: 5px;
`;
