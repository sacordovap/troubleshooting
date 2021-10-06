import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function AgregarQuitarHoras(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={[
          styles.leftStepper,
          {
            backgroundColor: props.decrement
              ? "rgba(0, 122, 255,0.1)"
              : "#FFFFFF"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="minus"
          style={styles.leftIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightStepper,
          {
            backgroundColor: props.increment
              ? "rgba(0, 122, 255,0.1)"
              : "#FFFFFF"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="plus"
          style={styles.rightIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  leftStepper: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    borderRightWidth: 0
  },
  leftIcon: {
    fontSize: 30,
    color: "rgba(7,252,21,1)"
  },
  rightStepper: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3
  },
  rightIcon: {
    fontSize: 30,
    color: "rgba(7,252,21,1)"
  }
});

export default AgregarQuitarHoras;
