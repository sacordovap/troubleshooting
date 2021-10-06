import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Header from "../../../../components/Header";
import AccionesTomadas from "../../../../components/AccionesTomadas";
import DetallesInput from "../../../../components/DetallesInput";
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
          <AccionesTomadas style={styles.acciones}></AccionesTomadas>
          
         
          
          <DetallesInput style={styles.detalles_Input}></DetallesInput>
        </View>
      </ImageBackground>
    </View>
  );
}
export default  AccionestomadasScreen; 