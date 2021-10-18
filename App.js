import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importas los screens

import HomeScreen from './src/screens//Home/HomeScreen';
import DatosInicialesScreen from "./src/screens/data/datosIniciales/DatosInicialesScreen";
import AccionesTomadasScreen from "./src/screens/data/AccionesTomadas/AccionesTomadasScreen";
import ResultadoConclusion from "./src/screens/data/ResultadoConclusion/ResultadoConclusionScreen";
import EventoCausa from "./src/screens/data/EventoCausa/EventoCausaScreen";

import Login from "./src/screens/Login/Login";
import DataEquipo from "./src/screens/data/DataEquipo/DataEquipoScreen"
import EvidenciaFoto from "./src/screens/data/EvidenciaFoto/EvidenciaFotoScreen"
import DataAgrupada from "./src/screens/data/Reporte/DataAgrupada"

const Stack = createNativeStackNavigator();
//cannot read  propierties  of undefinied (reading navigate)
function MyStack() {
  return (
    //Aqui por mientras alternas las plantallas de vista
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
<Stack.Screen name=" DataAgrupada"
        component={DataAgrupada} />
      <Stack.Screen name=" Datos Equipo"
        component={DataEquipo} />  
      <Stack.Screen name="Evidencia Foto"
        component={EvidenciaFoto} />
      <Stack.Screen name="Acciones Tomadas"
        component={AccionesTomadasScreen} />
      <Stack.Screen name="Datos Iniciales"
        component={DatosInicialesScreen} />
      <Stack.Screen name="Resultado Conclusion"
        component={ResultadoConclusion} />



      <Stack.Screen name="Evento Causa"
        component={EventoCausa} />


      <Stack.Screen name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }} />
      <Stack.Screen name="Login"
        component={Login} />

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

