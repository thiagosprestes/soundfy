import React from 'react';
import {
  Container,
  Item,
  ItemImage,
  ItemName,
  ItemsList,
  Title,
} from './styles';
import { Album, Artist, Track } from '../../types';

export enum ListType {
  Album = 'Album',
  Artist = 'Artist',
  Track = 'Track',
}

export type ItemsListType = Album & Artist & Track;

interface ItemsCarouselProps {
  isImageRounded?: boolean;
  items: ItemsListType[];
  onItemAction: (itemName: string) => void;
  onPlayTrack: (track: Track, index: number) => void;
  listType: ListType;
  title: string;
}

interface ListItemProps {
  cover: string;
  isImageRounded?: boolean;
  onItemAction: () => void;
  onPlayTrack: () => void;
  name: string;
}

const ItemsCarousel = ({
  isImageRounded = false,
  onItemAction,
  onPlayTrack,
  items,
  listType,
  title,
}: ItemsCarouselProps) => {
  // eslint-disable-next-line consistent-return
  const renderItemCover = (item: ItemsListType): string => {
    switch (listType) {
      case ListType.Album:
        return item.cover;
      case ListType.Artist:
        return item.cover;
      case ListType.Track:
        return item.album.cover;
      default:
        return '';
    }
  };

  const ListItem = ({
    cover,
    isImageRounded,
    onItemAction,
    onPlayTrack,
    name,
  }: ListItemProps) => (
    <Item onPress={listType === ListType.Track ? onPlayTrack : onItemAction}>
      <ItemImage isImageRounded={isImageRounded} source={{ uri: cover }} />
      <ItemName numberOfLines={1}>{name}</ItemName>
    </Item>
  );

  return (
    <Container>
      <Title>{title}</Title>
      <ItemsList
        contentContainerStyle={{ paddingHorizontal: 20 }}
        data={items}
        horizontal
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => (
          <ListItem
            cover={renderItemCover(item)}
            isImageRounded={isImageRounded}
            onItemAction={() => onItemAction(item.name)}
            onPlayTrack={() => onPlayTrack(item, index)}
            name={item.name}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ItemsCarousel;
