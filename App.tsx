/* eslint-disable camelcase */
import React from 'react';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

// import { Home } from './src/screens/Home';
import { ScheduleDetails } from './src/screens/ScheduleDetails';
import theme from './src/styles/theme';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {/* <Home /> */}
        <ScheduleDetails />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
