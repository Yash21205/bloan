import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyQuizes from '../../screens/Myquiz';
import CreateQuiz from '../../screens/CreateQuiz';
import AddQuizQstn from '../../screens/AddQuizQstn';
import QuizDetails from '../../screens/QuizDetails';

const Stack = createStackNavigator();
export default function  Stacktwo()
 {
  return (
    <Stack.Navigator>
       
          <Stack.Screen name="My quiz" component={MyQuizes}   />
          <Stack.Screen name="Create_quiz" component={CreateQuiz}    />
          <Stack.Screen name="AddQSTN" component={AddQuizQstn}  />
          <Stack.Screen name="QuizDetails" component={QuizDetails} />
    </Stack.Navigator>
  );
}

