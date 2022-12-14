import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Splash } from '../screens/Splash';

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator 
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Splash" component={Splash}/>
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}