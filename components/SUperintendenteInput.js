import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function SUperintendenteInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.superintendente}>Superintendente</Text>
      <TextInput
        placeholder="Ingrese Superintendente"
        style={styles.operarios_Input}
      ></TextInput>
      <Text style={styles.helperText}>Datos necesarios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  superintendente: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  operarios_Input: {
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    color: "#000",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 2,
    marginRight:2,
    backgroundColor: "#fff",
   
  },
  helperText: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    left: 0,  
    top: 68,
   
  }
});

export default SUperintendenteInput;
