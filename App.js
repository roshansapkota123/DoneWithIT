import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Alert, Button, View} from 'react-native';
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

 export default function App() {
   return (
    //<AccountScreen/>
    <ListingScreen/>
      
   );  

  //  console.log(require("./assets/icon.png"));
  //return <WelcomeScreen />
}
 

 