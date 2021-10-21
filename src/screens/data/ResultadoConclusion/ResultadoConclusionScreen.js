import React, { Component, useState } from "react";
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
    props.formulario.resultado = resultadoConclusion.resultado
    props.formulario.conclusiones = resultadoConclusion.conclusiones
  };

  console.log(props)
   


  return(
    <><ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.contenedorDatos1}>
            <Text style={styles.resultados}>Resultados</Text>
            <TextInput
              placeholder="Ingrese Detalles"
              multiline
              onChangeText={(value)=>handleChangeText('resultado', value)}
              style={styles.textInput}
            ></TextInput>
            <Text style={styles.concluciones}>Conclusiones</Text>
            <TextInput
              placeholder="Ingrese Detalles"
              multiline
              onChangeText={(value)=>handleChangeText('conclusiones', value)}
              style={styles.textInput}
            ></TextInput>
          </View>
        </ImageBackground>
      </ScrollView></>
  );
}



export default ResultadoconclusionScreen;