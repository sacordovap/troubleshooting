import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Header from "../../../../components/Header";
import EquipoInput from "../../../../components/EquipoInput";
import HorasParadaInput from "../../../../components/HorasParadaInput";
import AddRestHoras from "../../../../components/AddRestHoras";
import DetallesInput from "../../../../components/DetallesInput";
import styles from './styleData'

function DataEquipoScreen(props) {
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
          <EquipoInput style={styles.equipo}></EquipoInput>
          <Text style={styles.tiempoDeParada}>Tiempo de parada</Text>
          <View style={styles.horasRow}>
            <HorasParadaInput style={styles.horas}></HorasParadaInput>
            <AddRestHoras style={styles.cupertinoStepper1}></AddRestHoras>
          </View>
          <DetallesInput style={styles.detalles_Input}></DetallesInput>
        </View>
      </ImageBackground>
    </View>
  );
}
export default DataEquipoScreen; 