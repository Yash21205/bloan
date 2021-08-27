import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawercustom from './custom/Drawercustom';
import BottomNav from './custom/Bottomnav';
import { Provider as PaperProvider,Appbar } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
export default function DrawerNavigate({navigation}) {
    return (
      <PaperProvider>
<Appbar.Header>
<Appbar.Action icon="menu" onPress={() => {
navigation.dispatch(DrawerActions.openDrawer())
}} />
        
  <Appbar.Content title='QUIZ' subtitle='Custom Quiz'  >
 
  </Appbar.Content>
</Appbar.Header>
      
        <Drawer.Navigator drawerContent={(props)=><Drawercustom  {...props} /> }>
          
          <Drawer.Screen name="Bottom Navigator" component={BottomNav}   options={{headerShown:false}}   />
        </Drawer.Navigator>
        </PaperProvider>
      
    );
  }