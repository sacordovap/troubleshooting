import React, { useEffect, useState } from "react";
import {
  View, Text, ScrollView, Button, StyleSheet,
  TextInput
} from "react-native";

import firebase from "../../../database/firebase";
import { ListItem, Avatar, Divider } from "react-native-elements";
export default function HistorialReportesScreen(props) {

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
    <ScrollView style={styles.container} >
      {/* <Button title="Crear Usuario"
        onPress={() =>
          props.navigation.navigate('Crear Usuario')}>
      </Button> */}
      {   //recorrer usuarios
        Reportes.map(Reportes => {
          return (
            <ListItem style={styles.inputGroups} key={Reportes.id} buttonDivider
              onPress={() => props.navigation.navigate('ReporteDetalle', {
                ReporteId: Reportes.id
              })
              }>
              <ListItem.Chevron /*es el icono*/ />
              <Avatar source={{
                uri:
                  'https://icons555.com/images/icons-orange/image_icon_report_pic_512x512.png'
              }}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title>{Reportes.evento}</ListItem.Title>
                <ListItem.Subtitle>Fecha:{Reportes.fecha} Hora:{Reportes.hora}</ListItem.Subtitle>
              </ListItem.Content>

            </ListItem>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroups: {
    flex: 1,
    marginBottom: 15,
    marginLeft:1,
    marginRight:1,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
});
