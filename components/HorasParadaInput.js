import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function HorasParadaInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Horas" style={styles.horas_Input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16
  },
  horas_Input: {
    fontSize: 12,
    lineHeight: 16,
    color: "#000",
    opacity: 0.5,
    padding: 0,
    alignSelf: "stretch",
    flex: 1
  }
});

export default HorasParadaInput;
