import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function DocumentosRecientes(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.buscarDocumentos}>Buscar Documentos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(239,173,51,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  buscarDocumentos: {
    color: "#fff",
    fontSize: 14,
  }
});

export default DocumentosRecientes;
