import React, { Component } from "react";
import {Text, View } from 'react-native';
import styles from './sylesDatosIniciales'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-gesture-handler';
/*import {
  Avatar,
  FlatFeed,
  Activity,
  LikeButton,
  ReactionIcon
} from "expo-activity-feed";*/

function DatosInicialesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3}>
        <View style={styles.contenedor_Header}>
          <FeatherIcon
            name="arrow-left"
            style={styles.icon_Back}
          ></FeatherIcon>
          <Text style={styles.ingreso_De_Datos}>Ingreso de datos</Text>
        </View>
      </View>
      <View style={styles.fechaYHora}>
        <View style={styles.horas}>
          <Text style={styles.hora}>Hora</Text>
          <View style={styles.hora_InputRow}>
            <View style={styles.hora_Input}></View>
            <FeatherIcon name="clock" style={styles.icon_Hora}></FeatherIcon>
          </View>
        </View>
        <View style={styles.fechas}>
          <View style={styles.fechaColumnRow}>
            <View style={styles.fechaColumn}>
              <Text style={styles.fecha}>Fecha</Text>
              <View style={styles.fecha_input}></View>
            </View>
            <FontAwesomeIcon
              name="calendar-times-o"
              style={styles.icon_fecha}
            ></FontAwesomeIcon>
          </View>
        </View>
      </View>
      <Text style={styles.superintendente}>Superintendente</Text>
      <TextInput
        placeholder="Ingrese nombre"
        multiline
        style={styles.superintendente_Input}
      ></TextInput>
      <Text style={styles.supervisores}>Supervisores</Text>
      <TextInput
        placeholder="Ingrese nombres"
        multiline
        style={styles.supervisores_Input}
      ></TextInput>
      <Text style={styles.operadores}>Operadores</Text>
      <TextInput
      
        placeholder="Ingrese nombres"
        multiline 
        style={styles.operadores_Input}
      ></TextInput>
    </View>
  );
}

//Esto se debe de importar desde styles


export default DatosInicialesScreen;