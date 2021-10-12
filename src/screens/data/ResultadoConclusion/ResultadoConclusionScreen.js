import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Header from "../../../../components/Header";
import styles from './styleResultadoConcluciones'

function ResultadoconclusionScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.container1, props.style]}>
       <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}
            onPress={() =>
              props.navigation.navigate('Home')}
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
      <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.contenedorDatos1}>
        <Text style={styles.resultados}>Resultados</Text>
        <TextInput
            placeholder="Ingrese Detalles"
            style={styles.textInput}
          ></TextInput>
          <Text style={styles.concluciones}>Concluciones</Text>
        <TextInput
            placeholder="Ingrese Detalles"
            style={styles.textInput}
          ></TextInput>
        </View>
      </ImageBackground>
    </View>
  );
}

  

export default  ResultadoconclusionScreen; 