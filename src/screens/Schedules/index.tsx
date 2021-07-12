import React from 'react';

import { useTheme } from 'styled-components/native';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { SafeArea } from '../../components/SafeArea';
import { Container, Header, Title, RentalPeriod, DateInfo, DateValue, DateTitle } from './styles';

export function Schedules(): JSX.Element {
  const { colors } = useTheme();

  return (
    <SafeArea style={{ backgroundColor: colors.header }} removePaddingBottom>
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
              <DateValue />
            </DateInfo>
            <ArrowSvg />
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue />
            </DateInfo>
          </RentalPeriod>
        </Header>
      </Container>
    </SafeArea>
  );
}
