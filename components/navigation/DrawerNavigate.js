import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Landing from '../screens/Landing';
import Drawercustom from './custom/Drawercustom';
import Dashboard from '../screens/Dashboard';
import BottomNav from './custom/Bottomnav';

const Drawer = createDrawerNavigator();
export default function DrawerNavigate() {
    return (
      
        <Drawer.Navigator drawerContent={(props)=><Drawercustom  {...props} /> }>
           <Drawer.Screen name="Landing" component={Landing}  />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Sign up " component={SignUp} />
         
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Bottom Navigator" component={BottomNav} />
        </Drawer.Navigator>
      
    );
  }