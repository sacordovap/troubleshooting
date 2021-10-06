import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function OperadoresInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.operadores}>Operadores</Text>
      <TextInput
        placeholder="Ingrese operadores"
        style={styles.inputStyle}
      ></TextInput>
      <Text style={styles.datosNecesarios}>Datos necesarios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  operadores: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  inputStyle: {
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

export default OperadoresInput;
