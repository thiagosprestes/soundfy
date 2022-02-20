import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../../components/Text/styles';
import { colors, defaultPadding } from '../../../../styles/styleguide';

interface ItemImageProps {
  isImageRounded?: boolean;
}

export const Container = styled.View`
  margin-top: 18px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  padding-left: ${defaultPadding};
`;

export const ItemsList = styled.FlatList`
  margin-top: 18px;
` as unknown as typeof FlatList;

export const Item = styled.TouchableOpacity`
  width: 130px;
  margin-right: 24px;
`;

export const ItemImage = styled.Image<ItemImageProps>`
  width: 100%;
  height: 130px;
  margin-bottom: 8px;
  border-radius: ${props => (props.isImageRounded ? '75px' : '0px')};
`;

export const ItemName = styled(Text)`
  text-align: center;
  font-weight: bold;
  color: ${colors.white};
`;
