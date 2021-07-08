import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { SafeArea } from '../../components/SafeArea';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';

export function Home(): JSX.Element {
  const { colors } = useTheme();

  const carData = {
    brand: 'audi',
    model: 'RS5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png',
  };

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
        <CarList
          data={[1, 2, 3]}
          keyExtractor={item => String(item)}
          renderItem={() => <Car data={carData} />}
        />
      </Container>
    </SafeArea>
  );
}
