import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function FechaInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.fecha}>Fecha</Text>
      <TextInput placeholder="-" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    backgroundColor: "transparent"
  },
  fecha: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  inputStyle: {
    color: "#000",
    fontSize: 14,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    backgroundColor: "#fff",
    padding: 3
  }
});

export default FechaInput;
