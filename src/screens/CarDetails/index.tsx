import React from 'react';

import { useTheme } from 'styled-components/native';

import AccelerationSvg from '../../assets/acceleration.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import PeopleSvg from '../../assets/people.svg';
import SpeedSvg from '../../assets/speed.svg';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { SafeArea } from '../../components/SafeArea';
import {
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Model,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

export function CarDetails(): JSX.Element {
  const { colors } = useTheme();
  return (
    <SafeArea style={{ backgroundColor: colors.background_secondary }} removePaddingBottom>
      <Container>
        <Header>
          <BackButton
            onPress={() => {
              console.log('pressed');
            }}
          />
        </Header>

        <ImageSlider
          imagesUrl={[
            'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png',
          ]}
        />

        <Content>
          <Details>
            <Description>
              <Brand>Audi</Brand>
              <Model>RS5 coupé</Model>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Accessories>
            <Accessory name="380Km/h" Icon={SpeedSvg} />
            <Accessory name="3.2s" Icon={AccelerationSvg} />
            <Accessory name="800 HP" Icon={ForceSvg} />
            <Accessory name="Gasolina" Icon={GasolineSvg} />
            <Accessory name="Auto" Icon={ExchangeSvg} />
            <Accessory name="2 pessoas" Icon={PeopleSvg} />
          </Accessories>

          <About>
            Este é o automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real
            Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
          </About>
        </Content>
        <Footer>
          <Button title="confirmar" />
        </Footer>
      </Container>
    </SafeArea>
  );
}
