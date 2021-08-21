import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateQuiz from '../screens/CreateQuiz';
import AddQuizQstn from '../screens/AddQuizQstn';


const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create Quiz " component={CreateQuiz} />
      <Stack.Screen name="add qstn" component={AddQuizQstn} />
      
     
    </Stack.Navigator>
  );
}

