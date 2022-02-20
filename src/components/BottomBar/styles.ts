import styled from 'styled-components/native';
import { colors } from '../../styles/styleguide';
import { Text } from '../Text/styles';

export const Container = styled.View`
  flex-direction: row;
  padding-horizontal: 40px;
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

export const Label = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.grey};
  margin-top: 5px;
`;
