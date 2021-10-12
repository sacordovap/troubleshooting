import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Header from "../../../../components/Header";
import styles from './styleAcciones'

function AccionestomadasScreen(props) {
  return (
    <View style={styles.container}>
      <Header style={styles.header_Registro}></Header>
      <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        
        <View style={styles.contenedorDatos1}>
        <Text style={styles.titulo1}>Acciones Tomadas</Text>
        <TextInput
            placeholder="Ingrese Detalles"
            style={styles.textInput}
          ></TextInput>
        </View>
      </ImageBackground>
    </View>
  );
}


export default  AccionestomadasScreen; 