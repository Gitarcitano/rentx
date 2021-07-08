import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';
import { CarProps } from './interface';
import {
  Container,
  Details,
  Brand,
  Model,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

export function Car({ data }: CarProps): JSX.Element {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Model>{data.model}</Model>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{data.rent.price}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="cover"
      />
    </Container>
  );
}
