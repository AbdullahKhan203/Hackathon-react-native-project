import { View, Text,StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Home')
    },3000)
     
    })
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/doctor-logo.png')} style={styles.logo} />
      <Text style={styles.title}>DoctorApp</Text>
    </View>
  )
}

export default Splash;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
    },
    logo:{
        width:100,
        height:100,
        tintColor:'green',
    },
    // title:{
    //     // tintColor:'green',
    //     // fontWeight:'bold',
    //     // fontSize:'200',

    // }
})