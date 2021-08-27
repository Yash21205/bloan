import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Myquiz from '../../screens/Myquiz';
import Myprofile from '../../screens/Myprofile';
import Home from '../../screens/Home'
import CreateQuiz from '../../screens/CreateQuiz';
import StackNavigation from '../StackNavigation';
import Stacktwo from './Stacktwo';
const Tab = createBottomTabNavigator();

 export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={Home } options={{headerShown:false}} />
      <Tab.Screen name="My Quiz" component={Stacktwo}  options={{headerShown:false}} />
      <Tab.Screen name="My Profile" component={Myprofile}  options={{headerShown:false}} />
     

    </Tab.Navigator>
  );
}