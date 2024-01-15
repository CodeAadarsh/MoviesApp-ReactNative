import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Home")
        },700)
    },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
       <Image source={require(`../assets/android/mipmap-xxhdpi/icon.png`)}
            style={{height:100,width:100}}/>
           <Text 
            className="text-white text-3xl font-bold">
              <Text 
            className=" text-3xl font-bold" style={{color:"#D22F26"}}>no</Text>Movies
          </Text>
          
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})