import styled from 'styled-components/native';
import { colors } from '../../styles/styleguide';
import { Text } from '../Text/styles';

export const Container = styled.View`
  margin: 0 24px;
`;

export const Cover = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Info = styled.View``;

export const Name = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  max-width: 180px;
`;

export const Artist = styled(Text)`
  color: ${colors.white};
  font-size: 12px;
  max-width: 120px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  padding-right: 8px;
`;

export const Player = styled.TouchableOpacity`
  background-color: ${colors.playerBackground};
  border-radius: 8px;
  flex-direction: row;
  padding: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
