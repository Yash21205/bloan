import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import Login from './Login';

const Tab = createNativeStackNavigator();

export default function Tabnavigation() {
  return (
 
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Tab.Screen name="Sign UP" component={SignUp} />
      </Tab.Navigator>
   
  );
}