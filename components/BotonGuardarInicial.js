import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BotonGuardarInicial(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.guardarInformacion}>GUARDAR INFORMACION</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(1,123,146,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  guardarInformacion: {
    color: "#fff",
    fontSize: 17
  }
});

export default BotonGuardarInicial;
