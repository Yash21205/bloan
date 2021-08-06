import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from "./components/BasicComponents/Landing"
import { NavigationContainer } from '@react-navigation/native';
import Drawernavigator from './components/Navigation/Drawnavigator'

export default function App() {
  return (
    <NavigationContainer>
      <Drawernavigator>
        
      </Drawernavigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
