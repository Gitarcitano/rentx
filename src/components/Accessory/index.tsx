import React from 'react';

import { AccessoryProps } from './interface';
import { Container, Name } from './styles';

export function Accessory({ name, Icon }: AccessoryProps): JSX.Element {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}
