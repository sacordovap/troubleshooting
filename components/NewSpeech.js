import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function NewSpeech(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.nuevoReporte}>Nuevo Reporte</Text>
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
  nuevoReporte: {
    color: "#fff",
    fontSize: 14
  }
});

export default NewSpeech;
