import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateralBasico />

    </NavigationContainer>
  )
}

export default App;