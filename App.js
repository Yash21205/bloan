import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigate from './components/navigation/DrawerNavigate';
import { Appbar } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
       <Appbar.Header>
      <Appbar.Content title="Title" subtitle="Subtitle" />
     
    </Appbar.Header>
    <NavigationContainer>
      <DrawerNavigate>

      </DrawerNavigate>
    </NavigationContainer>
  </PaperProvider>
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
