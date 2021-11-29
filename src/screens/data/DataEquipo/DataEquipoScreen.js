import React, { Component, useState, useEffect, useContext } from "react";
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

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import { getEquiment } from "../../../services/api";
import { AuthContext } from "../../../Context/AuthContext";
import SearchableDropDown from 'react-native-dropdown-searchable';

function DataEquipoScreen(props) {
  const [Horas, setHoras] = useState(0);

  const initialState = {
    equipo: '',
    tiempoParada: '',
    detalleParada: '',
  }

  const [cerdo, setCerdo] = useState([
    {
      id: '',
      name: '',
    }
  ])

  const [equipo, setEquipo] = useState(initialState);

  const handleChangeText = (nombre, value) => {
    setEquipo({ ...equipo, [nombre]: value })
    if (nombre === 'equipo') {
      props.formulario.equipment_id = value
    } else if (nombre === 'detalleParada') {
      props.formulario.details = value
    }
    props.formulario.downtime = Horas
  };

  const { token } = useContext(AuthContext)

  const [equipos, setEquipos] = useState([])

  const traerEquipos = () => {

    getEquiment(token).then(rpta => {
      setEquipos(rpta.data.data)
    })
  }

  useEffect(() => {
    traerEquipos()
  }, [])

  console.log(cerdo);

  const [itemSelected, setitemSelected] = useState(initialState)

  return (

    <><ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.contenedorDatos1}>
          <Text style={styles.titulo1}>Equipo y tiempo de Parada</Text>
          <Text style={styles.equipo}>Equipo</Text>
          {equipos && equipos.length > 0 && <SearchableDropDown
            onTextChange={tag => {
              setCerdo({ tag });
            }}
            onItemSelect={item => {
              setCerdo  ({ cerdo: item });
            }}
            items={equipos}
            defaultIndex={0}
            resetValue={false}
            placeholder={'type something...'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />}

          <Text style={styles.tiempoDeParada}>Tiempo de parada</Text>
          <View style={styles.textInput2Row}>
            <Text style={styles.textInput2}
              onChangeText={(value) => handleChangeText('tiempoParada', value)}
            >{Horas} Horas</Text>
            <TouchableOpacity onPress={() => setHoras(Horas - 1)}>
              <FontAwesomeIcon
                name="minus"
                style={styles.icon}
              ></FontAwesomeIcon></TouchableOpacity>
            <TouchableOpacity onPress={() => setHoras(Horas + 1)}>
              <FontAwesomeIcon
                name="plus"
                style={styles.icon}
              ></FontAwesomeIcon></TouchableOpacity>
          </View>
          <Text style={styles.detalleDeParada}>Detalle de Parada</Text>
          <TextInput
            placeholder="Ingrese Detalles"
            onChangeText={(value) => handleChangeText('detalleParada', value)}
            multiline={true}
            selectTextOnFocus={true}
            disableFullscreenUI={true}
            style={styles.textInput3}
          ></TextInput>
        </View>
      </ImageBackground>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header_Registro: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    backgroundColor: "rgba(1,123,146,255)",
  },
  image1: {
    width: 360,
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: 679,
    marginTop: 1
  },
  image1_imageStyle: {
    opacity: 0.61
  },
  contenedorDatos1: {
    height: 608,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(197,196,196,1)",
    borderRadius: 36,
    shadowColor: "rgba(1,123,146,255)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 21,
    width: 21,
    opacity: 0.84,
    height: 21,
    marginLeft: 23
  },
  titulo1: {
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    opacity: 0.78,
    width: 243,
    marginTop: 26,
    marginLeft: 39
  },
  equipo: {
    color: "#121212",
    width: 83,
    opacity: 0.6,
    fontSize: 14,
    marginTop: 32,
    marginLeft: 19
  },
  textInput: {
    color: "#121212",
    width: 282,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 15,
    marginLeft: 19
  },
  tiempoDeParada: {
    color: "#121212",
    opacity: 0.6,
    marginTop: 30,
    marginLeft: 19,
    fontSize: 14,
  },
  textInput2: {
    color: "#121212",
    height: 23,
    width: 113,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    opacity: 0.6,
    marginTop: 3
  },
  controlHoras: {
    height: 29,
    width: 94,
    marginLeft: 20
  },
  textInput2Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 19,
    marginRight: 75
  },
  detalleDeParada: {
    color: "#121212",
    width: 110,
    height: 17,
    fontSize: 14,
    opacity: 0.6,
    marginTop: 18,
    marginLeft: 19
  },
  textInput3: {
    color: "#121212",

    width: 282,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 12,
    marginLeft: 19
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

export default DataEquipoScreen;
