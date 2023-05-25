import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/Welcome';
import LoginPage from './screens/LoginPage';
import Journal from './screens/Journal';
import Meditation from './screens/Meditation';
import Engagement from './screens/Engagement';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from "./BottomTab";
import {useFonts} from 'expo-font'; 

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
      man: require('/Users/yukiangmacpro/Desktop/dev/FirebaseAuth/PressStart2P-Regular.ttf')
    });
    if (!fontsLoaded) {
      return null
    }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="LoginPage" component = {LoginPage}/>
        <Stack.Screen options={{ headerShown: false}} name="BottomTab" component = {BottomTab}/>
        <Stack.Screen options={{ headerShown: false}} name="Home" component = {Home}/>
        <Stack.Screen name="Journal" component = {Journal}/>
        <Stack.Screen name="Meditation" component = {Meditation}/>
        <Stack.Screen name="Engagement" component = {Engagement}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

