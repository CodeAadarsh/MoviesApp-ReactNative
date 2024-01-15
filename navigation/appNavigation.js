import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreen';
import { MyTabs } from './BottomNavigationApp';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    
      <Stack.Navigator>
        
        <Stack.Screen name="SplashScreen" options={{headerShown: false}} initialParams={true} component={SplashScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={MyTabs} />
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
      </Stack.Navigator>
  )
  
}
