import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Myquiz from '../../screens/Myquiz';
import Myprofile from '../../screens/Myprofile';
const Tab = createBottomTabNavigator();

 export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Quiz" component={Myquiz} />
      <Tab.Screen name="My Profile" component={Myprofile} />
    </Tab.Navigator>
  );
}