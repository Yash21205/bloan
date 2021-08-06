import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Screens/Login'
import Landing from '../BasicComponents/Landing';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
  
      <Drawer.Navigator initialRouteName="Landing">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Landing" component={Landing} />
      </Drawer.Navigator>
    
  );
}