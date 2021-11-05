import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import BotonIniciarSesion from "../../../components/BotonIniciarSesion";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Link } from "react-router-native";

function Login(props) {
  const initialState = {
    usuario: '',
    contrasenia: ''
  }

  const [datos, setDatos] = useState(initialState);

  const handleChangeText = (nombre, value) => {
    setDatos({ ...datos, [nombre]: value })

  };
  const inicioSesion = () => {
    if (datos.usuario === '') {
      alert('Ingresa datos -> complete campo usuario')
    } else if (datos.contrasenia === '') {
      alert('Ingresa datos -> complete campo contraseña')
    } else {
      Alert.alert(
        "Bienvenido",
        "My Alert Msg",
        [

          { text: "OK", onPress: () => props.navigation.navigate('Home') }
        ]
      );

    }
  }
  console.log(props)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/fondo3.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <Text style={styles.antapaccay}>ANTAPACCAY</Text>
        <View style={styles.lineIzquierdaRow}>
          <View style={styles.lineIzquierda}></View>
          <View style={styles.lineIzquierdaFiller}>
            <Image
              source={require("../../../assets/images/LogoNuevo.png")}
              resizeMode="contain"
              style={styles.logoNuevo}
            ></Image>
          </View>
          <View style={styles.lineDerecha}></View>
        </View>
        <View style={styles.iconRow}>
          <FontAwesomeIcon name="user" style={styles.icon}></FontAwesomeIcon>
          <TextInput
            placeholder="Ingrese Usuario"
            placeholderTextColor="rgba(251,249,249,1)"
            selectionColor="rgba(255,253,253,1)"
            style={styles.usuario}
          ></TextInput>
        </View>
        <View style={styles.lineaSeparadora}></View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon name="key" style={styles.icon2}></FontAwesomeIcon>
          <TextInput
            placeholder="Ingrese Contraseña"
            placeholderTextColor="rgba(251,249,249,1)"
            selectionColor="rgba(255,253,253,1)"
            secureTextEntry={true}
            style={styles.password}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.iniciarSesion}>INICIAR SESION</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(251,251,251,1)"
  },
  background: {
    flex: 1
  },
  background_imageStyle: {},
  antapaccay: {
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    marginTop: 83,
    alignSelf: "center"
  },
  lineIzquierda: {
    width: 127,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.57,
    marginTop: 51
  },
  logoNuevo: {
    width: 106,
    height: 103,
    borderWidth: 1,
    borderColor: "rgba(250,248,248,1)",
    borderRadius: 100,
  },
  lineIzquierdaFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  lineDerecha: {
    width: 127,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.57,
    marginTop: 51
  },
  lineIzquierdaRow: {
    height: 103,
    flexDirection: "row",
    marginTop: 19
  },
  icon: {
    color: "rgba(255,255,255,0.57)",
    fontSize: 27,
    height: 27,
    width: 19
  },
  usuario: {
    color: "#121212",
    height: 21,
    width: 179,
    opacity: 0.8,
    textAlign: "center",
    marginLeft: 18,
    marginTop: 6
  },
  iconRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 54,
    marginRight: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  lineaSeparadora: {
    width: 290,
    height: 3,
    backgroundColor: "#E6E6E6",
    opacity: 0.53,
    marginTop: 25,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(255,255,255,0.57)",
    fontSize: 27,
    height: 27,
    width: 27
  },
  password: {
    color: "#121212",
    height: 21,
    width: 179,
    opacity: 0.8,
    textAlign: "center",
    marginLeft: 14,
    marginTop: 10
  },
  icon2Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 54,
    marginRight: 90,
    justifyContent: "center",
    alignItems: "center"
  },
 button: {
    width: 313,
    height: 53,
    backgroundColor: "rgba(186,184,184,0.38)",
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.38)",
    marginTop: 33,
    alignSelf: "center"
  },
  iniciarSesion: {
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    lineHeight: 30,
    fontSize: 18,
    marginTop: 8,
    alignSelf: "center"
  }
});

export default Login;
