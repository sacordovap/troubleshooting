import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Header from "../../../../components/Header";
import EventoCausa from "../../../../components/EventoCausa";
import DetalleImputResultadoConcluciones from "../../../../components/DetalleImputResultadoConcluciones";
import styles from './styleEventoCausa'

function EventoCausaScreen(props) {
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
          <EventoCausa style={styles.resultados}></EventoCausa>
        </View>
      </ImageBackground>
    </View>
  );
}
export default EventoCausaScreen; 