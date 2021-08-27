import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import SignUp from '../screens/Home';
import Landing from '../screens/Landing';
import DrawerNavigate from './DrawerNavigate';


const Stack = createStackNavigator();
export default function  Stackone()
 {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
          <Stack.Screen name="Sign up " component={SignUp}   options={{headerShown:false}} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigate}  options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

