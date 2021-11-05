import React, { useEffect, useState } from "react";
import {
  View, Text, ScrollView, Button, StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import firebase from "../../../database/firebase";
import { ListItem, Avatar, Divider } from "react-native-elements";
import Icons from "react-native-vector-icons/Ionicons";
export default function HistorialReportesScreen(props) {

  console.log(props);

  const [Reportes, setReportes] = useState([])
  useEffect(() => {
    //querySnapshot datos actuales en la BD
    firebase.db.collection('Reportes').onSnapshot(querySnapshot => {
      const Reportes = [];

      querySnapshot.docs.forEach(doc => {
        //doc.data visualizar datos contenidos
        const {
          fecha,
          hora,
          superintendente,
          supervisores,
          operadores,
          equipo,
          tiempoParada,
          detalleParada,
          evento,
          causa,
          accionesTomadas,
          resultado,
          conclusiones,
          evidenciaDetalle,
          foto1,
          foto2 } = doc.data()
        Reportes.push({
          id: doc.id, //propiedad
          fecha,
          hora,
          superintendente,
          supervisores,
          operadores,
          equipo,
          tiempoParada,
          detalleParada,
          evento,
          causa,
          accionesTomadas,
          resultado,
          conclusiones,
          evidenciaDetalle,
          foto1,
          foto2
        })
      });
      setReportes(Reportes) //guarda y muestra
    });
  }, []);

  return (
    <><View style={[styles.container1, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Icons name="ios-arrow-back" style={styles.leftIcon}

          ></Icons>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.ingresoDeDatos}>
        Reportes Generados
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.rightIconButton}></TouchableOpacity>
      </View>
    </View>
    
    <ScrollView style={styles.container}>

        {/* <Button title="Crear Usuario"
      onPress={() =>
        props.navigation.navigate('Crear Usuario')}>
    </Button> */}

        {//recorrer usuarios
          Reportes.map(Reportes => {
            return (
              <ListItem style={styles.inputGroups} key={Reportes.id} buttonDivider
                onPress={() => props.navigation.navigate('ReporteDetalle', {
                  ReporteId: Reportes.id
                })}>

                <ListItem.Chevron /*es el icono*/ />
                <Avatar source={{
                  uri: 'https://yosirvoblog.files.wordpress.com/2016/05/fir-reporte-de-incidentes-de-edificios.png'
                }}
                  rounded />
                <ListItem.Content>
                  <ListItem.Title>{Reportes.evento}</ListItem.Title>
                  <ListItem.Subtitle>Fecha:{Reportes.fecha} Hora:{Reportes.hora}</ListItem.Subtitle>
                </ListItem.Content>

              </ListItem>
            );
          })}
      </ScrollView></>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listaReportes: {
    color: "#121212",
    fontSize: 22,
    opacity: 0.8,
    marginTop: 25,
    textAlign:"center"
  },
  inputGroups: {
    flex: 1,
    marginBottom: 15,
    marginTop:10,
    marginLeft: 1,
    marginRight: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  container1: {
    flexDirection: "row",
    backgroundColor: "rgb(37, 150, 190)",
    height: 40,
    paddingRight: 8,
    marginTop: 21,
    paddingLeft: 8
  },
  header_Registro: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(1,123,146,255)",
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
    lineHeight: 17,
    color: "rgba(255,255,255,255)",
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.28,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {}
});
