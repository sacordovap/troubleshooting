import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/datoiniciales" exact>
            <DatosInicialesScreen/>
          </Route>
          <Route path="/equipo" exact>
            < DataEquipo/>
          </Route>
          <Route path="/accionestomadas" exact>
            <AccionesTomadasScreen/>
          </Route>
          <Route path="/eventocausa" exact>
            <EventoCausa/>
          </Route>
          <Route path="/resulatdosconcluciones" exact>
            <ResultadoConclusion/>
          </Route>
          <Route path="/evidencia" exact>
            <EvidenciaFoto/>
          </Route>
        </Switch>
    </Router>
  );
}



export default App;

/*
const Stack = createNativeStackNavigator();
//cannot read  propierties  of undefinied (reading navigate)



function MyStack() {
  return (
    //Aqui por mientras alternas las plantallas de vista
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}> 
    <Stack.Screen name=" Datos Equipo"
        component={DataEquipo} />
    <Stack.Screen name="Evidencia Fotos"
        component={EvidenciaFoto} />
    
<Stack.Screen name="Resultado Conclusion"
        component={ResultadoConclusion} />
<Stack.Screen name="Acciones Tomadas"
        component={AccionesTomadasScreen} />
 <Stack.Screen name="Login"
        component={Login} />

      <Stack.Screen name="Evento Causa"
        component={EventoCausa} />
 

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
*/
