import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './baotran/Home'
import ProfileScreen from './baotran/Profile'
import AlbumScreen from './baotran/Album'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={AlbumScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
      </Stack.Navigator>
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === "Home"){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } 
          else if (route.name === "Profile"){
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          else if (route.name === "Album"){
            iconName = focused ? 'ios-albums' : 'ios-albums-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour}/>
        },

      })}
      <Tab.Screen name="Home" component={MyTabs} />
      <Tab.Screen name="Settings" component={AlbumScreen} />
    </NavigationContainer>
  );
};

export default MyStack