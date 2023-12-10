import React from 'react'
import { Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import Home from '../../../../src/screens/Frontend/Home';
import About from '../../../../src/screens/Frontend/About';
import Contact from '../../../../src/screens/Frontend/Contact';
import Footer from '../../../../src/components/Footer';
import Header from '../../../../src/components/Header';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs=()=>{
  <Tab.Navigator name='Home' 
}

const LogoImage=()=>{
    return <Image source={require('../../../../src/assets/images/hunk.jpg')} style={{height:50,width:50}} />
}

export default function AppNavigator() {
  return (

    <NavigationContainer>
    {/* <Header /> */}
    <Stack.Navigator
    screenOptions={{
        headerTitleAlign:'center',
    }}
    >
    <Stack.Screen name='Home' component={Home} 
        options={{
            headerTitle:'My Home',
            headerTintColor:'red',
            headerTitleStyle:{
                fontWeight:'bold',
                // fontSize:24
                // color:'red'
            },
            headerShown:false
        }}
    />
    <Stack.Screen name='About' component={About} initialParams={{name:'Suhan',age:'35',id:'305'}}
    options={{
        headerTitle:()=><LogoImage/>,
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
            //   color="#fff"
            />
          ),
    }} />
    <Stack.Screen name='Contact' component={Contact} />
    </Stack.Navigator>
    <Footer/>
    </NavigationContainer>
  )
}