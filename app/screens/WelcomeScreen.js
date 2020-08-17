import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';  


function WelcomeScreen(props){
    return(
        <ImageBackground
        blurRadius = {5}
        style = {styles.background}
        source = {require("../assets/background.png")}
        >
            <View style = {styles.logoContainer}>
            <Image 
            style = {styles.logo}
            source = {require("../assets/logo-red.png")}></Image>
            <Text style = {styles.tagline}>Sell Anything You Are Done With</Text>
            </View>
            <View style = {styles.buttonsContainer}>
            <AppButton title = "Login"/> 
            <AppButton title = "Register" color = "secondary"/> 
            
            </View>

        </ImageBackground>
    ) 
}

const styles = StyleSheet.create({
    background: {
        flex: 1 ,
        justifyContent: "flex-end",
        alignItems: "center"
    }, 
    buttonsContainer:{
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 200,
        height: 100,
        
        },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: "center"  
        },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
         
    },
    
    
})

export default WelcomeScreen;