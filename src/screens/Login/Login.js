import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import BotonIniciarSesion from "../../../components/BotonIniciarSesion";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.background1Stack}>
        <ImageBackground
          source={require("../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.background1}
          imageStyle={styles.background1_imageStyle}
        >
          <BotonIniciarSesion
            style={styles.boton_iniciar}
          ></BotonIniciarSesion>
        </ImageBackground>
        <View style={styles.rect}>
          <View style={styles.textInputStack}>
            <TextInput
              placeholder="Usuario"
              placeholderTextColor="rgba(41,39,39,1)"
              selectionColor="rgba(41,38,38,1)"
              style={styles.textInput}
            ></TextInput>
            <FontAwesomeIcon name="user" style={styles.icon}></FontAwesomeIcon>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.icon2Row}>
            <FontAwesomeIcon name="lock" style={styles.icon2}></FontAwesomeIcon>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(41,39,39,1)"
              selectionColor="rgba(41,39,39,1)"
              secureTextEntry={true}
              style={styles.textInput2}
            ></TextInput>
          </View>
        </View>
        <Image
          source={require("../../../assets/images/antapaccay.png")}
          resizeMode="contain"
          style={styles.logo1}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background1: {
    top: 0,
    left: 0,
    width: 360,
    position: "absolute",
    backgroundColor: "rgba(15,15, 15,0.10079999999999999)",
    bottom: 0
  },
  background1_imageStyle: {
    opacity: 0.84
  },
  boton_iniciar: {
    height: 42,
    width: 158,
    borderWidth: 1,
    borderColor: "rgba(1,123,146,1)",
    borderRadius: 19,
    marginTop: 446,
    marginLeft: 105
  },
  rect: {
    top: 313,
   marginLeft:60,
   marginRight:40,
    width: 240,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.63)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 19
  },
  textInput: {
    top: 4,
    left: 28,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(45,42,42,1)",
    height: 20,
    width: 150,
    textAlign: "center",
    lineHeight: 16
  },
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,0.6)",
    fontSize: 29,
    height: 29,
    width: 20
  },
  textInputStack: {
    width: 168,
    height: 29,
    marginTop: 7,
    marginLeft: 27
  },
  rect2: {
    top: 374, marginLeft:60,
    marginRight:40,
    width: 240,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0.71)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 19,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(128,128,128,0.6)",
    fontSize: 29,
    height: 29,
    width: 18
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 128,
    marginLeft:22,
    textAlign: "center",
    lineHeight: 16
  },
  icon2Row: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginRight: 45,
    marginLeft: 27,
    marginTop: 7
  },
  logo1: {
    top: 25,
    width: 270,
    height: 251,
    position: "absolute",
    left: 55
  },
  background1Stack: {
    width: 360,
    flex: 1
  }
});

export default Login;
