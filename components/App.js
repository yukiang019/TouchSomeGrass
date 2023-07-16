//import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import Welcome from './screens/Welcome'
import LoginPage from './screens/LoginPage'
import Journal from './screens/Journal'
import Profile from './screens/Profile'
import BottomTab from '/Users/yukiangmacpro/Desktop/grass-final/BottomTab.js'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {useFonts} from 'expo-font';
//import { SplashScreen } from "expo-router";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator()

  export default function App() {

    let [fontsLoaded] = useFonts({
      man: require('/Users/yukiangmacpro/Desktop/grass-final/fonts/PressStart2P-Regular.ttf'),
      poppinsSemiBold: require('/Users/yukiangmacpro/Desktop/grass-final/fonts/Poppins-SemiBold.ttf'),
    
    });
    if (!fontsLoaded) {
      return null
    }
  //   const [isReady, setReady] = React.useState(false);

  // React.useEffect(() => {
  //   // Perform some sort of async data or asset fetching.
  //   setTimeout(() => {
  //     setReady(true);s
  //   }, 1000);
  // }, []);

    return (
      // <>
      // {}
      // {!isReady && <SplashScreen />}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false}} name="LoginPage" component = {LoginPage}/>
          <Stack.Screen options={{ headerShown: false}} name="BottomTab" component = {BottomTab}/>
          </Stack.Navigator>
          

      </NavigationContainer>
    // </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
