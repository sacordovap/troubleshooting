import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}
        onPress={()=>props.navigation.navigate('Home')
      }
        >
          <Icon name="ios-arrow-back" style={styles.leftIcon}
           ></Icon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.ingresoDeDatos}>
          Ingreso de Datos
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.rightIconButton}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(1,123,146,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.28,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "rgba(255,255,255,255)",
    fontSize: 23
  },
  leftText: {
    fontSize: 15,
    color: "rgba(255,255,255,255)",
    paddingLeft: 5,
    alignSelf: "center"
  },
  textWrapper: {
    flex: 0.44,
    alignItems: "center",
    justifyContent: "center"
  },
  ingresoDeDatos: {
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 17,
    color:  "rgba(255,255,255,255)",
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.28,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {}
});

export default Header;
