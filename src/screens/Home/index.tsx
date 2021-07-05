import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import Logo from '../../assets/logo.svg';
import { SafeArea } from '../../components/SafeArea';
import { Container, Header, TotalCars, HeaderContent } from './styles';

export function Home(): JSX.Element {
  const { colors } = useTheme();
  return (
    <SafeArea style={{ backgroundColor: colors.header }} removePaddingBottom>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Header>
          <HeaderContent>
            <Logo width={RFValue(108)} height={RFValue(12)} />
            <TotalCars>Total de 12 carros</TotalCars>
          </HeaderContent>
        </Header>
      </Container>
    </SafeArea>
  );
}
