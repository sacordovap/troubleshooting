import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import NewSpeech from "../../../components/NewSpeech";
import DocumentosRecientes from "../../../components/DocumentosRecientes";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen(props) {



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/FondoCurvo.png")}
        resizeMode="stretch"
        style={styles.fondoCurvo}
        imageStyle={styles.fondoCurvo_imageStyle}
      >
        <Text style={styles.bienvenido}>BIENVENIDO</Text>
        <Image
          source={require("../../../assets/images/LogoNuevo.png")}
          resizeMode="contain"
          style={styles.logoNuevo}
        ></Image>
      </ImageBackground>
      <View style={styles.wIdgets}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Registro-form")}
            style={styles.button}
          > 
            <FontAwesomeIcon
              name="file-powerpoint-o"
              style={styles.iconReporte}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HistorialReporte")}
            style={styles.button2}
          >
            <FontAwesomeIcon
              name="list-alt"
              style={styles.iconLista}
            ></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.nuevoReporteRow}>
          <Text style={styles.nuevoReporte}>NUEVO REPORTE</Text>
          <Text style={styles.reportesRealizados}>REPORTES REALIZADOS</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fondoCurvo: {
    width: 658,
    height: 245,
    alignSelf: "center"
  },
  fondoCurvo_imageStyle: {},
  bienvenido: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 54,
    alignSelf: "center"
  },
  logoNuevo: {
    width: 106,
    height: 103,
    borderRadius: 100,
    marginTop: 4,
    alignSelf: "center"
  },
  wIdgets: {
    width: 330,
    height: 176,
    marginTop: 87,
    alignSelf: "center"
  },
  button: {
    width: 152,
    height: 147,
    backgroundColor: "rgba(16,139,76,0.61)",
    borderRadius: 22
  },
  iconReporte: {
    color: "rgba(242,234,234,1)",
    fontSize: 94,
    height: 94,
    width: 80,
    marginTop: 15,
    marginLeft: 36
  },
  button2: {
    width: 152,
    height: 147,
    backgroundColor: "rgba(248,164,39,0.58)",
    borderRadius: 22,
    marginLeft: 25
  },
  iconLista: {
    color: "rgba(242,234,234,1)",
    fontSize: 94,
    height: 94,
    width: 94,
    marginTop: 15,
    marginLeft: 29
  },
  buttonRow: {
    height: 147,
    flexDirection: "row",
    marginRight: 1
  },
  nuevoReporte: {
    color: "#121212",
    textAlign: "center",
    marginLeft:3,
  },
  reportesRealizados: {
    color: "#121212",
    textAlign: "center",
    marginLeft:56,

  },
  nuevoReporteRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 22,
    marginRight: 6,
    alignSelf: "center"
  }
});

export default HomeScreen;
