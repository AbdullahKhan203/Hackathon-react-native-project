import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/AppNavigator';
// import AppNavigator from './android/app/src/navigation/AppNavigator';

export default function App() {
  return (
    <>
    {/* <StatusBar  barStyle={'dark-content'} backgroundColor='#1d5968' /> */}
    {/* <AppNavigator /> */}
    <AppNavigator />
    </>
  )
}

