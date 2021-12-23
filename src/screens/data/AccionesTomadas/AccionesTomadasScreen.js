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
import styles from './styleAcciones'
import Icon from "react-native-vector-icons/Ionicons";

function AccionestomadasScreen(props) {

  const initialState = {
    accionesTomadas: '',
  }

  const [accionesTomadas, setAccionesTomadas] = useState(initialState);
  console.log(props)
  const handleChangeText = (nombre, value) => {
    setAccionesTomadas({ ...accionesTomadas, [nombre]: value })
    // props.formulario.equipo=equipo.equipo
    // props.formulario.detalleParada=equipo.detalleParada;
    if (nombre==='accionesTomadas') {
      props.formulario.take_actions = value
     } 
};

  

  
  return (

    <><ScrollView style={styles.container}>
        {/* <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >

          <View style={styles.contenedorDatos1}> */}
            <Text style={styles.titulo1}>Acciones Tomadas</Text>
            <Text style={styles.equipo}>Acciones Realizadas</Text>
            <TextInput
              placeholder="Ingrese las acciones realizadas"
              multiline={true}
              defaultValue={props.formulario.take_actions }
              onChangeText={(value) => handleChangeText('accionesTomadas', value)}
              style={styles.textInput}
            ></TextInput>
          
      </ScrollView></>
  );
}


export default AccionestomadasScreen;