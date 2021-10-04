import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CupertinoStepper from "../../../../components/CupertinoStepper";
import styles from './styleData'

function DataEquipoScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor_Header}>
        <View style={styles.icon1Row}>
          <Icon name="ios-arrow-back" style={styles.icon1}></Icon>
          <Text style={styles.ingresoDeDatos1}>Ingreso de datos</Text>
        </View>
      </View>
      <Text style={styles.equipo}>Equipo</Text>
      <Text style={styles.tiempo_De_Parada}>Tiempo de parada</Text>
      <View style={styles.horas_InputRow}>
        <TextInput placeholder="Horas" style={styles.horas_Input}></TextInput>
        <CupertinoStepper style={styles.stteper}></CupertinoStepper>
      </View>
      <TextInput
        placeholder="Ingrese Equipo"
        multiline={true}
        style={styles.equipo_Input}
      ></TextInput>
      <TextInput
        placeholder="Detalles"
        multiline={true}
        style={styles.detalle_Tiempo_Parada_Input}
      ></TextInput>
    </View>
  );
}
export default DataEquipoScreen;