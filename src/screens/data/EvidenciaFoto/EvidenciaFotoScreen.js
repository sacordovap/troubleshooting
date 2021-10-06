import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";
import Header from "../../../../components/Header";
import Icon from "react-native-vector-icons/Entypo";
import BotonGuardarInicial from "../../../../components/BotonGuardarInicial";

function EvidenciaFotoScreen(props) {
  return (
    <View style={styles.container}>
      <Header style={styles.headerRegistro1}></Header>
      <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.rect}>
          <Text style={styles.titulo1}>Registro de Incidentes</Text>
          <Text style={styles.evidencias}>Evidencias</Text>
          <TextInput
            placeholder="Detalles de las Evidencias"
            style={styles.textInput}
          ></TextInput>
          <Icon name="camera" style={styles.icon}></Icon>
          <BotonGuardarInicial
            style={styles.cupertinoButtonSuccess}
          ></BotonGuardarInicial>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerRegistro1: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    backgroundColor: "rgba(225,225,225,0.13)",
    marginTop: 21
  },
  image1: {
    width: 360,
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: 679,
    marginTop: 1
  },
  image1_imageStyle: {
    opacity: 0.61
  },
  rect: {
    width: 321,
    height: 616,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(197,196,196,1)",
    borderRadius: 36,
    shadowColor: "rgba(7,252,21,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 20
  },
  titulo1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    opacity: 0.78,
    width: 243,
    height: 29,
    marginTop: 26,
    marginLeft: 39
  },
  evidencias: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.6,
    fontSize: 12,
    marginTop: 27,
    marginLeft: 20
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 268,
    borderWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    opacity: 0.6,
    textAlign: "left",
    marginTop: 18,
    marginLeft: 20
  },
  icon: {
    color: "rgba(128,128,128,0.65)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 26,
    marginLeft: 134
  },
  cupertinoButtonSuccess: {
    height: 44,
    width: 216,
    marginTop: 275,
    marginLeft: 52
  }
});

export default EvidenciaFotoScreen;
