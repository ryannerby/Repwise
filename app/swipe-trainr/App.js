import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutDaySelector from './screens/WorkoutDaySelector';
import WorkoutScreen from './screens/WorkoutScreen';
import SummaryScreen from './screens/SummaryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={WorkoutDaySelector} options={{ title: 'Swipe Trainr' }} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
