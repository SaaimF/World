import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Notitification from '../screens/Notification';
import Acc from '../screens/Acc';
import Paka from '../screens/Paka';
import Ho from '../screens/Log';
import Sli from '../screens/Sli';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Ho" component={Ho} options={{headerShown: false}} /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notitification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Acc"
          component={Acc}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Paka"
          component={Paka}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Sli" component={Sli} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
