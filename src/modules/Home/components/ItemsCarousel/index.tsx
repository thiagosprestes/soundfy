import React from 'react';
import {
  Container,
  Item,
  ItemImage,
  ItemName,
  ItemsList,
  Title,
} from './styles';
import { Song } from '../../types';

interface ItemsCarouselProps {
  isImageRounded?: boolean;
  items: Song[];
  title: string;
}

const ItemsCarousel = ({
  isImageRounded = false,
  items,
  title,
}: ItemsCarouselProps) => {
  const ListItem = ({
    isImageRounded,
    item,
  }: {
    isImageRounded?: boolean;
    item: Song;
  }) => (
    <Item>
      <ItemImage isImageRounded={isImageRounded} source={{ uri: item.cover }} />
      <ItemName numberOfLines={1}>{item.name}</ItemName>
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
          <ListItem isImageRounded={isImageRounded} item={item} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ItemsCarousel;
