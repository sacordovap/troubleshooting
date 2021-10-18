import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

function DataAgrupada(props){
  
    return (
      <><View style={[styles.container1, props.style]}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}
            onPress={() => props.navigation.navigate('Home')}
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
      </View><View style={styles.container}>
          <Text>Aqui va el codigo de vista</Text>
        </View></>
    );
  
}

//Esto se debe de importar desde styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroups: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        alignItems: "center",
        borderBottomColor: '#cccccc'
    },
    container1: {
      flexDirection: "row",
      backgroundColor: "rgba(1,123,146,1)",
      height: 40,
      paddingRight: 8,
      paddingLeft: 8
    },
    header_Registro: {
      height: 39,
      borderWidth: 1,
      borderColor:"rgba(1,123,146,255)",
      backgroundColor: "rgba(1,123,146,255)",
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
      fontFamily: "Constantia",
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

export default DataAgrupada;