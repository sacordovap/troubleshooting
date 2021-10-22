import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ActivityIndicator
} from "react-native";

import Swiper from "react-native-web-swiper";
import DataEquipoScreen from "../DataEquipo/DataEquipoScreen";
import AccionestomadasScreen from "../AccionesTomadas/AccionesTomadasScreen";
import DatosInicialesScreen from "../datosIniciales/DatosInicialesScreen";
import EvidenciaFotoScreen from "../EvidenciaFoto/EvidenciaFotoScreen";
import EventoCausaScreen from "../EventoCausa/EventoCausaScreen";
import ResultadoconclusionScreen from "../ResultadoConclusion/ResultadoConclusionScreen";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import AwesomeAlert from 'react-native-awesome-alerts';
import EvidenciacameraScreen from "../EvidenciaFoto/EvidenciacameraScreen";

function Registro_form(props) {

  const [formulario, setFormulario] = useState({
    fecha: '',
    hora: '',
    superintendente: '',
    supervisores: '',
    operadores: '',
    equipo: '',
    tiempoParada: '',
    detalleParada: '',
    evento: '',
    causa: '',
    accionesTomadas: '',
    resultado: '',
    conclusiones: '',
    evidenciaDetalle: '',
    foto1: '',
    foto2: ''
  })
  const guardarData = () => {
    Alert.alert('ya no se podrán realizar cambios', 'estas seguro?', [
      { text: 'yes', onPress: () => aceptarSolicitud() },
      { text: 'No', onPress: () => console.log(false) },
    ])
  }
  const aceptarSolicitud = () => {
    props.navigation.navigate('Preview', { formulario });
  }

  const [timerCount, setTimer] = useState(5)
  const [cargando, setCargando] = useState(true)
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval)
        return lastTimerCount - 1
      })
    }, 1000) //each count lasts for a second
    //cleanup the interval on complete
    setCargando(false)
    return () => clearInterval(interval)
  }, []);

  const [Alerta, setAlerta] = useState(false)

  const showAlerta = () => {
    setAlerta(true)
  }
  const hideAlerta = () => {
    setAlerta(false)
  }
  const nuevo = Alerta
  console.log(nuevo);

  return (
    <><View style={[styles.container1, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Icons name="ios-arrow-back" style={styles.leftIcon}

          ></Icons>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.ingresoDeDatos}>
          Ingreso de Datos
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.rightIconButton}></TouchableOpacity>
      </View>
    </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Swiper
            from={0}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              nextTitle: '>',
              nextTitleStyle: { color: 'gray', fontSize: 24, fontWeight: '500' },
              PrevComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <Text style={{ color: 'gray', fontSize: 24, fontWeight: '500' }}>
                    {'<'}
                  </Text>
                </TouchableOpacity>
              ),
            }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <DatosInicialesScreen formulario={formulario} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <DataEquipoScreen formulario={formulario} />
            </View>

            <View style={{ flex: 1, justifyContent: "center" }}>
              <EventoCausaScreen formulario={formulario} />
            </View>

            <View style={{ flex: 1, justifyContent: "center" }}>
              <AccionestomadasScreen formulario={formulario} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ResultadoconclusionScreen formulario={formulario} />
            </View>

            <View style={{ flex: 1, justifyContent: "center" }}>

              <EvidenciacameraScreen formulario={formulario} />
              <TouchableOpacity
                style={[styles.containerGuardarDataInicial, styles.cupertinoButtonSuccess]}
                onPress={() => props.navigation.navigate('Preview', { formulario })}
              >
                <Text style={styles.guardarInformacion}>GUARDAR INFORMACION</Text>
              </TouchableOpacity>
              {/* <AwesomeAlert
      show={false}
      showProgress={false}
      title="Friend Request"
      titleStyle={{ fontSize: 22, marginBottom: 10 }}
      messageStyle={{ fontSize: 18, marginBottom: 10 }}
      message="Do you know this user?"
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText="No"
      confirmText="Yes"
      cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
      confirmButtonStyle={{ width: 100, alignItems: 'center' }}
      confirmButtonColor="#AEDEF4"
      cancelButtonColor="#DD6B55"
      onCancelPressed={() => {hideAlerta()}}
      onConfirmPressed={() => {showAlerta()}}
    /> */}

              {/* {cargando ? (<View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
    </View>) : (<Text>cesd</Text>)} */}

            </View>


          </Swiper>
        </View>

      </View></>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

  containerGuardarDataInicial: {
    backgroundColor: "rgba(1,123,146,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  guardarInformacion: {
    color: "#fff",
    fontSize: 17,
  },

  cupertinoButtonSuccess: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40

  },
  container1: {
    flexDirection: "row",
    backgroundColor: "rgba(1,123,146,1)",
    height: 40,
    paddingRight: 8,
    marginTop: 21,
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
})
export default Registro_form;
