/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

export function ScheduleDetails(): JSX.Element {
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

          <RentalPeriod>
            <CalendarIcon>
              <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
            <Feather name="chevron-right" size={RFValue(10)} color={colors.text} />
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>
        <Footer>
          <Button title="confirmar" />
        </Footer>
      </Container>
    </SafeArea>
  );
}
