import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  NativeRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-native";
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
import Preview from "./src/screens/data/Preview/Preview"
import Registro_form from "./src/screens/data/Registro_form/Registro_form";
import EvidenciacameraScreen from './src/screens/data/EvidenciaFoto/EvidenciacameraScreen';
import HistorialReportesScreen from './src/screens/Historial/HistorialReportesScreen';
import ReporteDetalle from './src/screens/Historial/ReporteDetalle';
import { AuthProvider } from './src/Context/authState';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login"
        component={Login} />
      <Stack.Screen name="Evidencia-Camera"
        component={EvidenciacameraScreen} />
      <Stack.Screen name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }} />
      <Stack.Screen name="Registro-form"
        component={Registro_form} />
      <Stack.Screen name="HistorialReporte"
        component={HistorialReportesScreen} />
      <Stack.Screen name="ReporteDetalle"
        component={ReporteDetalle} />
      <Stack.Screen name="Preview"
        component={Preview} />
      <Stack.Screen name="Datos-Equipo"
        component={DataEquipo} />
      <Stack.Screen name="Evidencia-Foto"
        component={EvidenciaFoto} />
      <Stack.Screen name="Resultado-Conclusion"
        component={ResultadoConclusion} />
      <Stack.Screen name="Evento-Causa"
        component={EventoCausa} />


    </Stack.Navigator>

  )
}
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

//Esto se debe de importar desde styles