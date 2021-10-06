import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function EquipoInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.equipo}>Equipo</Text>
      <TextInput
        placeholder="Ingrese Equipo afectado"
        style={styles.equipo_Input}
      ></TextInput>
      <Text style={styles.datosNecesarios}>Datos necesarios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "transparent"
  },
  equipo: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  equipo_Input: {
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    color: "#000",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
 
  },
  datosNecesarios: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8
  }
});

export default EquipoInput;
