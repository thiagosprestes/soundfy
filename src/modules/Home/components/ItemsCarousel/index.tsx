import React from 'react';
import {
  Container,
  Item,
  ItemImage,
  ItemName,
  ItemsList,
  Title,
} from './styles';
import { Album, Artist, Song } from '../../types';

export enum ListType {
  Album = 'Album',
  Artist = 'Artist',
  Song = 'Song',
}

export type ItemsListType = Album & Artist & Song;

interface ItemsCarouselProps {
  isImageRounded?: boolean;
  items: ItemsListType[];
  onGoToAlbum: (albumName: string) => void;
  listType: ListType;
  title: string;
}

interface ListItemProps {
  cover: string;
  isImageRounded?: boolean;
  onGoToAlbum: (onGoToAlbum: string) => void;
  name: string;
}

const ItemsCarousel = ({
  isImageRounded = false,
  onGoToAlbum,
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
      case ListType.Song:
        return item.album.cover;
      default:
        return '';
    }
  };

  const ListItem = ({
    cover,
    isImageRounded,
    onGoToAlbum,
    name,
  }: ListItemProps) => (
    <Item onPress={() => onGoToAlbum(name)}>
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
        renderItem={({ item }) => (
          <ListItem
            cover={renderItemCover(item)}
            isImageRounded={isImageRounded}
            onGoToAlbum={onGoToAlbum}
            name={item.name}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ItemsCarousel;
