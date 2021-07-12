import React from 'react';

import { ButtonProps } from './interface';
import { Container, Title } from './styles';

export function Button({ title, color, ...rest }: ButtonProps): JSX.Element {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
