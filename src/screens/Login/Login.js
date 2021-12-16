import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";

import BotonIniciarSesion from "../../../components/BotonIniciarSesion";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Asyncstorage from "@react-native-async-storage/async-storage"
import { postLogin } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import AwesomeAlert from 'react-native-awesome-alerts';
import { useAuth } from "../../Context/authState";


const Login = (props) => {
  console.log(props)
  const initialState = {
    email: '',
    password: ''
  }

  const [datos, setDatos] = useState(initialState);
  const [Estado, setEstado] = useState(false);
  const showAlert = () => {
    setEstado(true);
  };
  const hideAlert = () => {
    setEstado(false);
  };


  const { token, setToken } = useAuth()
  const navigation = useNavigation();


  const handleChangeText = (nombre, value) => {
    setDatos({ ...datos, [nombre]: value })

  };

  console.log(props)
  const doLogin = () => {
    postLogin(datos).then(response => {
      setToken(response.data.token)
      Asyncstorage.setItem("token", response.data.token).then(response => {
        showAlert()

      })

    }, err => {
      console.warn(err)
      alert("Usuario no encontrado")
    })
  }

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };


  return (

    // <View styles={{ marginTop: 21 }}>
    //   <TextInput placeholder="name" name="email" label="Email"
    //     onChangeText={(value) => handleChangeText('email', value)} />
    //   <TextInput placeholder="password" name="password" label="Password" secureTextEntry={true}
    //     onChangeText={(value) => handleChangeText('password', value)} />
    //   <Button title="Enviar" name="Submit" onPress={doLogin}/>

    // </View>


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
            placeholderTextColor="rgba(234,235,235,255)"
            selectionColor="rgba(255,253,253,1)"
            style={styles.usuario}
            onChangeText={(value) => handleChangeText('email', value)}
          ></TextInput>
        </View>
        <View style={styles.lineaSeparadora}></View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon name="key" style={styles.icon2}></FontAwesomeIcon>
          <TextInput
            placeholder="Ingrese Contraseña"
            placeholderTextColor="rgba(234,235,235,255)"
            selectionColor="rgba(255,253,253,1)"
            secureTextEntry={true}
            style={styles.password}
            onChangeText={(value) => handleChangeText('password', value)}
          ></TextInput>
        </View>
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            size="large" 
            color="#00ff00"
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) :(
        <TouchableOpacity
          name="Submit"
          onPress={doLogin}
          style={styles.button}
        >
          <Text style={styles.iniciarSesion}>INICIAR SESION</Text>
        </TouchableOpacity>)}
        <AwesomeAlert
          show={Estado}
          showProgress={false}
          title="Bienvenido"
          titleStyle={{ fontSize: 22, marginBottom: 10 }}
          messageStyle={{ fontSize: 18, marginBottom: 10 }}
          message="inicio de sesión exitoso"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No"
          confirmText="Continuar"
          cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
          confirmButtonStyle={{ width: 100, alignItems: 'center' }}
          confirmButtonColor="#AEDEF4"
          cancelButtonColor="#DD6B55"
          onConfirmPressed={() => {
            navigation.navigate('Home')
            hideAlert();
          }}
        />
      </ImageBackground>
    </View>
  );
}


export default Login

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
    color: 'white',
    height: 21,
    width: 150,
    opacity: 0.8,
    textAlign: "center",
    marginLeft: 18,
    marginTop: 6,
    fontSize:16,
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
    color: 'white',
    opacity: 0.8,
    textAlign: "center",
    marginLeft: 14,
    marginTop: 10,
    fontSize:16,
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