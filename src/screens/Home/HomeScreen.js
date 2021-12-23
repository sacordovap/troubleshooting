import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import NewSpeech from "../../../components/NewSpeech";
import DocumentosRecientes from "../../../components/DocumentosRecientes";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function HomeScreen(props) {

  console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.bienvenido}>BIENVENIDO</Text>
        <Image
          source={require("../../../assets/images/LogoNuevo.png")}
          resizeMode="contain"
          style={styles.logoNuevo}
        ></Image>

      </View>
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
            <Text style={styles.nuevoReporte}>Nuevo Reporte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HistorialReporte")}
            style={styles.button2}
          >
            <FontAwesomeIcon
              name="list-alt"
              style={styles.iconLista}
            ></FontAwesomeIcon>
            <Text style={styles.reportesRealizados}>Reportes Realizados</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaebeb"
  },
  fondoCurvo: {
    width: 658,
    height: 245,
    alignSelf: "center"
  },
  fondoCurvo_imageStyle: {},
  bienvenido: {
    fontWeight: 'bold',
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 70,
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
    alignSelf: "center",
    marginTop: 90,
    marginLeft:15,
    marginRight:15
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
    textAlign: "center",
    fontWeight: 'bold',
    color: "#ffffff",
    marginTop:8,
  },
  reportesRealizados: {
    marginTop:-2,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 'bold'

  },
  nuevoReporteRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
    alignSelf: "center"
  },
  rect: {
    width:'100%',
    height: 259,
    backgroundColor: "rgba(43,183,196,1)",
    borderWidth: 0,
    borderColor: "rgba(43,183,196,1)",
    borderRadius: 20,
    marginTop: -20,
    alignSelf: "center"
  }
});

export default HomeScreen;
