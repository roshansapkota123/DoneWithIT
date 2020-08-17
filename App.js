import React, {useState} from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Alert, Button, View, TextInput, Text} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';


 export default function App() {
   return <LoginScreen />
  
  //  console.log(require("./assets/icon.png"));
  //return <WelcomeScreen />
}
 

 