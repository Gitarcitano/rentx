import React from 'react';

import { ImageSliderProps } from './interface';
import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles';

export function ImageSlider({ imagesUrl }: ImageSliderProps): JSX.Element {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
