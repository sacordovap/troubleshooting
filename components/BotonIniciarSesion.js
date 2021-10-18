import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BotonIniciarSesion(props) {
  console.log(props)
  return (
    <TouchableOpacity style={[styles.container, props.style]}  onPress={() =>
              props.navigation.navigate('Home')}>
      <Text style={styles.iniciarSesion}>Iniciar Sesión</Text>
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
    paddingRight: 16,

  },
  iniciarSesion: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 10,
  }
});

export default BotonIniciarSesion;
