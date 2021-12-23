import React, { useContext, useEffect, useState } from "react";
import {
  View, Text, ScrollView, Button, StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { ListItem, Avatar, Divider } from "react-native-elements";
import Icons from "react-native-vector-icons/Ionicons";
import { getTroubleShooting } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { AuthContext } from "../../Context/authState";
import { format } from "date-fns";
export default function HistorialReportesScreen({ children }) {


  const [Reportes, setReportes] = useState([])
  const { token } = useContext(AuthContext)
  const navigation = useNavigation();

  const traerTroubles = () => {
    startLoading()
    getTroubleShooting(token).then(rpta => {
      setReportes(rpta.data.data)
      setLoading(false)
      // console.log(rpta.data.data)
    })
  }


  useEffect(() => {
    traerTroubles()
  }, [])



  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };


  return (
    <><View style={[styles.container1]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Icons name="ios-arrow-back" style={styles.leftIcon}

          ></Icons>
          <Text style={styles.leftText}></Text>
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

        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            size="large"
            color="#f4c47c"
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>

            {/* <Button title="Crear Usuario"
      onPress={() =>
        props.navigation.navigate('Crear Usuario')}>
    </Button> */}

            {//recorrer usuarios
              Reportes.map(ReportesObj => {

                return (
                  <ListItem style={styles.inputGroups} key={ReportesObj.id} buttonDivider
                    onPress={() => navigation.navigate('ReporteDetalle', {
                      id: ReportesObj.id,
                      traerTroubles
                    })}>

                    <ListItem.Chevron /*es el icono*/ />
                    <Avatar source={{
                      uri: 'https://yosirvoblog.files.wordpress.com/2016/05/fir-reporte-de-incidentes-de-edificios.png'
                    }}
                      rounded />
                    <ListItem.Content>
                      <ListItem.Title>{ReportesObj.event}</ListItem.Title>
                      <ListItem.Subtitle>Fecha: {(new Date(ReportesObj.date)).toLocaleDateString()}</ListItem.Subtitle>
                      <ListItem.Subtitle>Hora: {(new Date(ReportesObj.date)).toLocaleTimeString()}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              })}
          </>
        )}
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
    textAlign: "center"
  },
  inputGroups: {
    flex: 1,
    marginBottom: 15,
    marginTop: 10,
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
    paddingLeft: 8,

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
    fontSize: 30
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
    fontSize: 16,
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
