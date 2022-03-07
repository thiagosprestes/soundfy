import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Text } from '../../../components/Text/styles';
import { colors, defaultPadding } from '../../../styles/styleguide';

interface TextProps {
  isPlaying: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBlue};
`;

export const ScrollView = styled.ScrollView`
  flex-grow: 1;
`;

export const Background = styled.ImageBackground`
  height: 260px;
`;

export const AlbumHeader = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${colors.grey};
  border-radius: 50px;
  position: absolute;
  padding: 6px;
  top: 0;
  left: 0;
`;

export const AlbumName = styled(Text)`
  font-weight: bold;
  font-size: 24px;
  color: ${colors.white};
`;

export const AlbumArtist = styled(Text)`
  font-size: 12px;
  color: ${colors.white};
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  padding: ${defaultPadding};
`;

export const AlbumActions = styled.View`
  flex-direction: row;
  margin-top: 13px;
`;

export const Action = styled.TouchableOpacity`
  margin: 0 4px;
`;

export const Tracks = styled.FlatList`
  margin-top: 26px;
` as unknown as typeof FlatList;

export const Track = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 ${defaultPadding};
`;

export const TrackInfo = styled.View``;

export const Name = styled(Text)<TextProps>`
  margin-bottom: 4px;
  font-weight: bold;
  color: ${props => (props.isPlaying ? colors.secondaryBlue : colors.white)};
`;

export const Artist = styled(Text)<TextProps>`
  font-size: 12px;
  color: ${props => (props.isPlaying ? colors.secondaryBlue : colors.white)};
`;
