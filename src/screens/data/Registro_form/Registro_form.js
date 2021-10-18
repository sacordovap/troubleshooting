import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

import Swiper from "react-native-web-swiper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import DataEquipoScreen from "../DataEquipo/DataEquipoScreen";
import AccionestomadasScreen from "../AccionesTomadas/AccionesTomadasScreen";
import DatosInicialesScreen from "../datosIniciales/DatosInicialesScreen";
import EvidenciaFotoScreen from "../EvidenciaFoto/EvidenciaFotoScreen";
import EventoCausaScreen from "../EventoCausa/EventoCausaScreen";
import ResultadoconclusionScreen from "../ResultadoConclusion/ResultadoConclusionScreen";
import Registro_form from "../Registro_form/Registro_form";

function DataAgrupada(props) {
  let Horas = 0;
  /*const [Horas, setHoras] = useState(0);*/
  console.log(Horas)
  /*useEffect(() => {
   
  },[hora] )
  */

  function disminuirHoras() {
    if (Horas === 0) {
      Horas = 0
    }
    else setHora(Horas - 1)
    console.log(Horas)
  }
  function aumentarHoras() {
    setHora(Horas + 1)
    console.log(Horas)
  }



  return (
    <View style={{ flex: 1, marginTop:21 }}>
      <View style={{ flex: 1 }}>
        <Swiper
          from={1}
          minDistanceForAction={0.1}
          controlsProps={{
            dotsTouchable: true,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: '>',
            nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
            PrevComponent: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                  {'<'}
                </Text>
              </TouchableOpacity>
            ),
          }}
        >
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <DatosInicialesScreen />
          </View>

          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <DataEquipoScreen />
          </View>

          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <EventoCausaScreen />
          </View>

          <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <AccionestomadasScreen />
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ResultadoconclusionScreen />
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <EvidenciaFotoScreen />
          </View>



        </Swiper>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header_Registro: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    backgroundColor: "rgba(1,123,146,255)",
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
  contenedorDatos1: {
    width: 321,
    height: 608,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(197,196,196,1)",
    borderRadius: 36,
    shadowColor: "rgba(1,123,146,255)",
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
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 21,
    width: 21,
    opacity: 0.84,
    height: 21,
    marginLeft: 23
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
  equipo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 13,
    width: 83,
    opacity: 0.6,
    fontSize: 12,
    marginTop: 32,
    marginLeft: 19
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 282,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 15,
    marginLeft: 19
  },
  tiempoDeParada: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 12,
    opacity: 0.6,
    marginTop: 27,
    marginLeft: 19
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 23,
    width: 113,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    opacity: 0.6,
    marginTop: 3
  },
  controlHoras: {
    height: 29,
    width: 94,
    marginLeft: 20
  },
  textInput2Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 19,
    marginRight: 75
  },
  detalleDeParada: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 110,
    height: 17,
    fontSize: 12,
    opacity: 0.6,
    marginTop: 18,
    marginLeft: 19
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",

    width: 282,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 12,
    marginLeft: 19
  },
  container1: {
    flexDirection: "row",
    backgroundColor: "rgba(1,123,146,1)",
    height: 40,
    paddingRight: 8,
    paddingLeft: 8
  },
  header_Registro: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    backgroundColor: "rgba(1,123,146,255)",
  },
  leftWrapper: {
    flex: 0.28,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "rgba(255,255,255,255)",
    fontSize: 23
  },
  leftText: {
    fontSize: 15,
    color: "rgba(255,255,255,255)",
    paddingLeft: 5,
    alignSelf: "center"
  },
  textWrapper: {
    flex: 0.44,
    alignItems: "center",
    justifyContent: "center"
  },
  ingresoDeDatos: {
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 17,
    color: "rgba(255,255,255,255)",
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.28,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {}
});

export default DataAgrupada;
