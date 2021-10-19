import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Header from "../../../../components/Header";
import styles from './styleAcciones'
import Icon from "react-native-vector-icons/Ionicons";

function AccionestomadasScreen(props) {

  const initialState={ 
    accionesTomadas: '',
}

const [accionesTomadas, setAccionesTomadas] = useState(initialState);
console.log(props)
  const handleChangeText = (nombre, value) => {
    setAccionesTomadas({ ...accionesTomadas, [nombre]: value })
   // props.formulario.equipo=equipo.equipo
   // props.formulario.detalleParada=equipo.detalleParada;
   
 props.formulario.accionesTomadas=accionesTomadas.accionesTomadas
};





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
    </View><ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >

          <View style={styles.contenedorDatos1}>
            <Text style={styles.titulo1}>Acciones Tomadas</Text>
            <TextInput
              placeholder="Ingrese Detalles"
              multiline={true}
              onChangeText={(value)=>handleChangeText('accionesTomadas', value)}
              style={styles.textInput}
            ></TextInput>
          </View>
        </ImageBackground>
      </ScrollView></>
  );
}


export default AccionestomadasScreen;