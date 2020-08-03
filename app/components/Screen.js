import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import colors from '../config/colors';



function Screen({children, style}) {
    return (
        <SafeAreaView style = {styles.screen}>
        <View style = {style}>
        {children}
        </View>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 0,
        flex: 1,
       
    },
})

export default Screen;