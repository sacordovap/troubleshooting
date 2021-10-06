import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importas los screens

import HomeScreen from './src/screens/Home/HomeScreen';
import DatosInicialesScreen from "./src/screens/data/datosIniciales/DatosInicialesScreen";
import AccionesTomadasScreen from "./src/screens/data/AccionesTomadas/AccionesTomadasScreen";

import Login from "./src/screens/Login/Login";
import DataEquipo from "./src/screens/data/DataEquipo/DataEquipoScreen"



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    //Aqui por mientras alternas las plantallas de vista
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>  
     <Stack.Screen name="Acciones Tomadas"
        component={AccionesTomadasScreen} /> 
    <Stack.Screen name="Datos Equipo"
        component={DataEquipo} /> 

   



      
   
      <Stack.Screen name="Login"
        component={Login} />

<Stack.Screen name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }} /> 
        
      <Stack.Screen name="Datos entrada"
        component={AccionesTomadasScreen} />
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

