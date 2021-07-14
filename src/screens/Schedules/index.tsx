import React from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components/native';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { SafeArea } from '../../components/SafeArea';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateValue,
  DateTitle,
  Content,
  Footer,
} from './styles';

export function Schedules(): JSX.Element {
  const { colors } = useTheme();

  return (
    <SafeArea style={{ backgroundColor: colors.header }} removePaddingBottom>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Container>
        <Header>
          <BackButton
            color={colors.shape}
            onPress={() => {
              console.log('pressed');
            }}
          />

          <Title>
            Escolha uma {'\n'}
            data de início e {'\n'}
            fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue isSelected>15/06/2021</DateValue>
            </DateInfo>
            <ArrowSvg />
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue isSelected={false}>15/07/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>

        <Content>
          <Calendar />
        </Content>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
      </Container>
    </SafeArea>
  );
}
