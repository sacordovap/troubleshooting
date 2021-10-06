
import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function DetalleImputResultadoConcluciones(props) {
  return (
    <View style={[styles.container, props.style]}>
      
      <TextInput
        placeholder="Ingrese Detalles"
        multiline={true}
        style={styles.detalle_parada_input}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    backgroundColor: "transparent",
    marginLeft: 2,
   marginRight:2
  },
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    marginLeft: 2,
    marginRight:2
  },
  detalle_parada_input: {
    color: "#000",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "rgba(255,255,255,1)",
   marginLeft: 2,
   marginRight:2
  }
});

export default DetalleImputResultadoConcluciones;
