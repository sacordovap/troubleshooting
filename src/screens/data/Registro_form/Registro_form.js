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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Header from "../../../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import DataEquipoScreen from "../DataEquipo/DataEquipoScreen";
import AccionestomadasScreen from "../AccionesTomadas/AccionesTomadasScreen";
import DatosInicialesScreen from "../datosIniciales/DatosInicialesScreen";
import EvidenciaFotoScreen from "../EvidenciaFoto/EvidenciaFotoScreen";
import EventoCausaScreen from "../EventoCausa/EventoCausaScreen";
import ResultadoconclusionScreen from "../ResultadoConclusion/ResultadoConclusionScreen";


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

  console.log(timerCount)

  return (
    <View style={{ flex: 1, marginTop: 21 }}>
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
            <EvidenciaFotoScreen formulario={formulario} />
            <TouchableOpacity
              style={[styles.containerGuardarDataInicial, styles.cupertinoButtonSuccess]}
              onPress={() => props.navigation.navigate('Preview', { formulario })}
            >
              <Text style={styles.guardarInformacion}>GUARDAR INFORMACION</Text>
            </TouchableOpacity>
            {/* {cargando ? (<View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator />
            </View>) : (<Text>cesd</Text>)} */}

          </View>


        </Swiper>
      </View>

    </View>
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
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
  guardarInformacion: {
    color: "#fff",
    fontSize: 17,
  },

  cupertinoButtonSuccess: {

    height: 50,
    marginLeft: 20,
    marginRight: 20,

  }
})
export default Registro_form;
