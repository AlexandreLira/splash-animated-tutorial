import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="auto" />

    </ThemeProvider>

  );
}

