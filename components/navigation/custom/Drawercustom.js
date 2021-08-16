import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';


export default function  Drawercustom (props)  {
    return(

        <View>
            <View>
                <Text>
                    Yash
                </Text>
            </View>
        <DrawerContentScrollView  {...props}  > 
        <DrawerItemList  {...props} >
        
        </DrawerItemList>
        </DrawerContentScrollView>       
        </View>
    );

}