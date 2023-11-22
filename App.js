import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//create a stack navigator

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//create a botton navigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from './componentes/Homescreen.js';

import AboutScreen from "./componentes/Aboutscreen.js";

import ContactScreen from './componentes/Contactscreen.js';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

//const Drawer = createDrawerNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen name="Contact" component={ContactScreen}/>

      </Stack.Navigator>

    </NavigationContainer>

  );

}