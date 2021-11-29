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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styleEventoCausa'


function EventoCausaScreen(props) {

const initialState={ 
    evento: '',
    causa: '',
}
const [eventoCausa, setEventoCausa] = useState(initialState);

  const handleChangeText = (nombre, value) => {
    setEventoCausa({ ...eventoCausa, [nombre]: value })
    if (nombre==='evento') {
      props.formulario.event=value
     } else if (nombre==='causa') {
      props.formulario.attributed_cause=value
     } 
};





  return (
    
      <><ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.contenedorDatos1}>
          <Text style={styles.titulo1}>Evento y causas Asociadas</Text>
            <Text style={styles.evento}>Evento</Text>
            <TextInput
              placeholder="Ingrese el Evento ocurrido"
              multiline
              onChangeText={(value)=>handleChangeText('evento', value)}
              style={styles.textInput}
            ></TextInput>
            <Text style={styles.causas}>Causas</Text>
            <TextInput
              placeholder="Ingrese Causas encontradas"
              multiline
              onChangeText={(value)=>handleChangeText('causa', value)}
              style={styles.textInput}
            ></TextInput>
          </View>
        </ImageBackground>
      </ScrollView></>
  );
}


export default EventoCausaScreen; 