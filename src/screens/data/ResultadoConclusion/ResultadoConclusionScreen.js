import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Header from "../../../../components/Header";
import styles from './styleResultadoConcluciones'
import Icon from "react-native-vector-icons/Ionicons";

function ResultadoconclusionScreen(props) {

  const initialState = {
    resultado: '',
    conclusiones: ''
  }

  const [resultadoConclusion, setResultadoConclusion] = useState(initialState);

  const handleChangeText = (nombre, value) => {
    setResultadoConclusion({ ...resultadoConclusion, [nombre]: value })
    // props.formulario.equipo=equipo.equipo
    // props.formulario.detalleParada=equipo.detalleParada;
    if (nombre==='resultado') {
      props.formulario.results =value
     } else if (nombre==='conclusiones') {
      props.formulario.conclusiones = value
     } 
  };


  console.log(props)
   


  return(
    <>
    <ScrollView style={styles.container}>         
          {/* <View style={styles.contenedorDatos1}> */}
            <Text style={styles.titulo1}>Resultado Obtenidos</Text>
            <Text style={styles.resultados}>Resultados</Text>
            <TextInput 
              placeholder="Ingrese los resultados obtenidos"
              multiline
              defaultValue={props.formulario.results}
              onChangeText={(value)=>handleChangeText('resultado', value)}
              style={styles.textInput}
            ></TextInput>
            {/* <Text style={styles.concluciones}>Conclusiones</Text>
            <TextInput
              placeholder="Ingrese las conclusiones "
              multiline  
              defaultValue={props.formulario.conclusiones }
              onChangeText={(value)=>handleChangeText('conclusiones', value)}
              style={styles.textInput}
            ></TextInput> */}
          {/* </View> */}
      
      </ScrollView>
      </>
      
  );
}



export default ResultadoconclusionScreen;