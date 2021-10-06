import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import Header from "../../../../components/Header";
import FechaInput from "../../../../components/FechaInput";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import HoraInput from "../../../../components/HoraInput";
import FeatherIcon from "react-native-vector-icons/Feather";
import SUperintendenteInput from "../../../../components/SUperintendenteInput";
import SupervisoresInput from "../../../../components/SupervisoresInput";
import OperadoresInput from "../../../../components/OperadoresInput";

import styles from './sylesDatosIniciales'

function DatosInicialesScreen(props) {
  return (
    <View style={styles.container}>
      <Header style={styles.header_Registro_Info_1}></Header>
      <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.contenedor_datos}>
          <View style={styles.fechaRow}>
            <FechaInput style={styles.fecha}></FechaInput>
            <FontAwesomeIcon
              name="calendar-times-o"
              style={styles.icon}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.horaRow}>
            <HoraInput style={styles.hora}></HoraInput>
            <FeatherIcon name="clock" style={styles.icon2}></FeatherIcon>
          </View>
          <SUperintendenteInput
            style={styles.superIntendenteInput}
          ></SUperintendenteInput>
          <SupervisoresInput style={styles.supervisores}></SupervisoresInput>
          <OperadoresInput style={styles.operadores}></OperadoresInput>
        </View>
      </ImageBackground>
    </View>
  );
}
export default DatosInicialesScreen;