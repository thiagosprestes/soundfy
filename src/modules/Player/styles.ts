import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import { Text } from '../../components/Text/styles';
import { colors, defaultPadding } from '../../styles/styleguide';

export const Modal = styled.Modal``;

export const Container = styled.View`
  background-color: ${colors.playerBackground};
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: 37px;
  padding: ${defaultPadding} ${defaultPadding} 0;
`;

export const Cover = styled.Image`
  width: 280px;
  height: 280px;
  margin-bottom: 24px;
  align-self: center;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: ${colors.white};
`;

export const Artist = styled(Text)`
  font-size: 12px;
  text-align: center;
  color: ${colors.white};
`;

export const PlayerData = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
`;

export const Timestamp = styled(Text)`
  font-size: 12px;
  color: ${colors.white};
`;

export const PlayerProgress = styled(Slider)`
  flex: 1;
  margin: 0 8px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TogglePlaybackStateButton = styled.TouchableOpacity`
  margin: 0 24px;
`;

export const ModalBody = styled.View`
  justify-content: center;
  flex: 1;
`;

export const TrackInfo = styled.View`
  padding: 0 ${defaultPadding} ${defaultPadding};
`;
