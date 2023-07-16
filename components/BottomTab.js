import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Welcome from './screens/Welcome'
import LoginPage from './screens/LoginPage'
import Journal from './screens/Journal'
import Profile from './screens/Profile'
import Meditate from './screens/Meditate'
import Discuss from './screens/Discuss'

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      activeColor="white"
      barStyle={{ backgroundColor: 'seagreen' }}
    >
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'darkseagreen'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: 'Journal',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={'darkseagreen'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Meditate"
        component={Meditate}
        options={{
          tabBarLabel: 'Meditate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play-outline" color={'darkseagreen'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Discuss"
        component={Discuss}
        options={{
          tabBarLabel: 'Discuss',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={'darkseagreen'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={'darkseagreen'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}