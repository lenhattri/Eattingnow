import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/common/Homescreen';

export default function Navigation() {
  return (
    <NavigationContainer  >
      <Navigator/>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();

function Navigator(){
  return(
   <Stack.Navigator >
     <Stack.Screen name="Home" component={Homescreen} options={{
    headerShown: false
}}/>
     
   </Stack.Navigator>
  )
}