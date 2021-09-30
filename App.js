import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importas los screens

import HomeScreen from './src/screens/HomeScreen';
import DatosInicialesScreen from "./src/screens/data/DatosInicialesScreen";
import AccionesTomadasScreen from "./src/screens/data/AccionesTomadasScreen";


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    //Aqui por mientras alternas las plantallas de vista
    <Stack.Navigator>
       
      <Stack.Screen name="Datos entrada" 
      component={AccionesTomadasScreen} />

      <Stack.Screen name="Datos Iniciales" 
      component={DatosInicialesScreen} />

      
      <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


//Esto se debe de importar desde styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
