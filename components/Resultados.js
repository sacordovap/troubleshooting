import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function ResultadoConclusion(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.acciones}>Acciones Tomadas</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "transparent"
  },
  acciones: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  acciones_Input: {
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

export default ResultadoConclusion;
