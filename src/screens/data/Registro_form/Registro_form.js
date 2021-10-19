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
import Header from "../../../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import DataEquipoScreen from "../DataEquipo/DataEquipoScreen";
import AccionestomadasScreen from "../AccionesTomadas/AccionesTomadasScreen";
import DatosInicialesScreen from "../datosIniciales/DatosInicialesScreen";
import EvidenciaFotoScreen from "../EvidenciaFoto/EvidenciaFotoScreen";
import EventoCausaScreen from "../EventoCausa/EventoCausaScreen";
import ResultadoconclusionScreen from "../ResultadoConclusion/ResultadoConclusionScreen";


function DataAgrupada(props) {
  
  /*const [Horas, setHoras] = useState(0);*/
 
  /*useEffect(() => {
   
  },[hora] )
  */
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

  const actualizarFormulario = () => {
    setFormulario({
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
  }


useEffect(() => {
  setFormulario(formulario=>({
    ...formulario
  }))
}, [formulario])

return (
  <View style={{ flex: 1, marginTop: 21 }}>
    <View style={{ flex: 1 }}>
      <Swiper
        from={1}
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
        </View>
      </Swiper>
    </View>

  </View>
)

}

export default DataAgrupada;
