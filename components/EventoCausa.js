import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import DetalleImputResultadoConcluciones from "./DetalleImputResultadoConcluciones";

function EventoCausa(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.resultados}>Evento</Text>
      <DetalleImputResultadoConcluciones style={styles.acciones_Input}></DetalleImputResultadoConcluciones>

      <Text style={styles.concluciones}>Causa</Text>
      <DetalleImputResultadoConcluciones style={styles.acciones_Input}></DetalleImputResultadoConcluciones>

    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "transparent"
  },
  resultados: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  concluciones: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  acciones_Input: {
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
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

export default  EventoCausa;
