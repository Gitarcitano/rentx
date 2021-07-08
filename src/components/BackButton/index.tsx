import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { BackButtonProps } from './interface';
import { Container } from './styles';

export function BackButton({ color, ...rest }: BackButtonProps): JSX.Element {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color || colors.text} />
    </Container>
  );
}
