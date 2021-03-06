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
import EventoCausaScreen from "../EventoCausa/EventoCausaScreen";
import ResultadoconclusionScreen from "../ResultadoConclusion/ResultadoConclusionScreen";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import AwesomeAlert from 'react-native-awesome-alerts';
import EvidenciacameraScreen from "../EvidenciaFoto/EvidenciacameraScreen";
import { useNavigation } from '@react-navigation/native';

function Registro_form(props) {

  const [formulario, setFormulario] = useState({
    date: '',
    description: '',
    superintendent: '',
    supervisor: '',
    operators: '',
    equipment_id: '',
    downtime: 0,
    details: '',
    event: '',
    attributed_cause: '',
    take_actions: '',
    results: '',
    // conclusiones: '',
    // evidenciaDetalle: '',
    foto1: []
  })

  const resetFormulario = () => {

    setFormulario({
      date: '',
      description: '',
      superintendent: '',
      supervisor: '',
      operators: '',
      equipment_id: '',
      downtime: '',
      details: '',
      event: '',
      attributed_cause: '',
      take_actions: '',
      results: '',
      // conclusiones: '',
      // evidenciaDetalle: '',
      foto1: []
    })
  }

  const [ActivarBoton, setActivarBoton] = useState(false)

  const mostrarSize = () => {
    console.log(Object.keys(formulario).length)
  }

  useEffect(() => {
    mostrarSize()
  })

  const [Estado, setEstado] = useState(false);
  const showAlert = () => {
    setEstado(true);
  };
  const hideAlert = () => {
    setEstado(false);
  };
  const navigation = useNavigation();

  var faltantes;

  return (
    <>
      <View style={[styles.container1, props.style]}>
        <View style={styles.leftWrapper}>
          {/* <TouchableOpacity style={styles.leftIconButton}
            onPress={() => navigation.navigate('Tabs')}
          ><Icons name="ios-arrow-back" style={styles.leftIcon}
          ></Icons>
            <Text style={styles.leftText}></Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.ingresoDeDatos}>
            TROUBLESHOOTING
          </Text>
        </View>
        <View style={styles.rightWrapper}>
          {ActivarBoton ? (<TouchableOpacity style={styles.leftIconButton}
            onPress={() => {
              if (
                formulario.description === '' ||
                formulario.superintendent === '' ||
                formulario.supervisor === '' ||
                formulario.operators === '' ||
                formulario.equipment_id === '' ||
                formulario.downtime === '' ||
                formulario.details === '' ||
                formulario.event === '' ||
                formulario.attributed_cause === '' ||
                formulario.take_actions === '' ||
                formulario.results === '') {
                showAlert()
              }
              else { props.navigation.navigate('Preview', { formulario, setFormulario, resetFormulario}) }
            }}

          ><Icon name="save" style={styles.leftIcon}
          ></Icon>
            <Text style={styles.leftText}>Guardar</Text>
          </TouchableOpacity>) : null}
        </View>

      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Swiper
            from={0}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              dotsPos: 'top',
              dotActiveStyle: { backgroundColor: '#2596be' },
              prevPos: 'top-left',
              nextPos: 'top-right',
              prevTitle: 'Anterior',
              nextTitle: 'Siguiente',
              // prevPos: 'left',
              // nextPos: 'right',
              // nextTitle: ' ',
              // nextTitleStyle: { color: 'gray', fontSize: 24, fontWeight: '500' },
              // PrevComponent: ({ onPress }) => (
              //   <TouchableOpacity onPress={onPress}>
              //     <Text style={{ color: 'gray', fontSize: 24, fontWeight: '500' }}>
              //       {' '}
              //     </Text>
              //   </TouchableOpacity>
              // ),
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
              <EvidenciacameraScreen formulario={formulario} setActivarBoton={setActivarBoton} />
            </View>
          </Swiper>
        </View>
        <AwesomeAlert
          show={Estado}
          showProgress={false}
          title="Alerta"
          titleStyle={{ fontSize: 22, marginBottom: 10 }}
          messageStyle={{ fontSize: 18, marginBottom: 10 }}
          message="Completa todos los campos"
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
            hideAlert();
          }}
        />
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
    backgroundColor: "rgb(37, 150, 190)",
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
    fontSize: 30
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
