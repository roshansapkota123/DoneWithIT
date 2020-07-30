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

 export default function App() {
   return (
    <MessagesScreen/>
   );  

  //  console.log(require("./assets/icon.png"));
  //return <WelcomeScreen />
}
 

 