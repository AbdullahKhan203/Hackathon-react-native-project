import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createStackNavigator,
} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
