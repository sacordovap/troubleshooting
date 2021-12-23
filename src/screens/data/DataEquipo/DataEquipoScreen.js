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

// import SearchableDropDown from 'react-native-dropdown-searchable';
import DropDownPicker from 'react-native-dropdown-picker';
import Select from 'react-select';
import { AuthContext } from "../../../Context/authState";

import SearchableDropdown from 'react-native-searchable-dropdown';

function DataEquipoScreen(props) {
  const [Horas, setHoras] = useState(props.formulario.downtime);

  const initialState = {
    equipment_id: '',
    downtime: '',
    details: '',
  }

  const [equipo, setEquipo] = useState(initialState);

  const handleChangeText = (nombre, value) => {
    setEquipo({ ...equipo, [nombre]: value })
    if (nombre === 'details') {
      props.formulario.details = value
    }
    props.formulario.downtime = Horas
    props.formulario.equipment_id = selection?.id
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
    return function cleanup() {
      traerEquipos()
    }
  }, [])

  const [selection, setSelection] = useState()
  const [itemSelected, setitemSelected] = useState(initialState)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('equiment-test');
  let options = equipos.map(function (obj) {
    return { id: obj.id, name: obj.name };
  })
  console.log(options);
  console.log('escogi' + selection?.id);
  return (

    <><View style={styles.container}>
      {/* <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.contenedorDatos1}> */}
      <Text style={styles.titulo1}>Equipo y tiempo de Parada</Text>

      <View style={styles.textInput2Row}>
        <Text style={styles.equipo}>Equipo afectado</Text>
        {/* <DropDownPicker
              open={open}
              value={value}
              items={options}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setEquipos}
              onChangeValue={(value, index) => {
                initialState.equipment_id = value;
                console.log("selected value", value);
              }}
            /> */}
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => setSelection(item)}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            color: "#696969",
            borderBottomWidth: 1,
            borderColor: "rgba(1,123,146,255)",
            width:150,
            marginTop: 5,
            marginRight: 19,
            marginLeft: 5,
          }}
          itemStyle={{
            //single dropdown item style
            padding: 6,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={equipos}
          //mapping of item array 
          defaultIndex={2}
          //default selected item index
          placeholder="buscar equipo"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
        //To remove the underline from the android input
        />
      </View>
      <TextInput
          placeholder=" "
          value={selection?.name}
          editable={false}
          multiline={true}
          style={styles.EquipoInput}
        ></TextInput>
      <ScrollView><View style={styles.textInput2Row}>     
        <Text style={styles.tiempoDeParada}>Tiempo de parada</Text>
        <TouchableOpacity onPress={() => setHoras(Horas - 1)}>
          <FontAwesomeIcon
            name="minus"
            style={styles.icon}
          ></FontAwesomeIcon></TouchableOpacity>
        <Text style={styles.textInput2}
          onChangeText={(value) => handleChangeText('downtime', value)}
        >{Horas} Horas</Text>
        <TouchableOpacity onPress={() => setHoras(Horas + 1)}>
          <FontAwesomeIcon
            name="plus"
            style={styles.icon}
          ></FontAwesomeIcon></TouchableOpacity>
      </View>
        <Text style={styles.detalleDeParada}>Detalle de Parada</Text>
        <TextInput
          placeholder="Ingrese Detalles"
          onChangeText={(value) => handleChangeText('details', value)}
          multiline={true}
          defaultValue={props.formulario.details}
          style={styles.textInput3}
        ></TextInput>
      </ScrollView>
      {/* </View>
      </ImageBackground> */}
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "rgba(1,123,146,255)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    marginBottom: 3
  },
  header_Registro: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    backgroundColor: "rgba(1,123,146,255)",
  },
  image1: {
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: '105%',
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
    marginBottom: 27,
    marginLeft: 20,
    marginRight: 20
  },
  icon: {
    color: "#74a7e2",
    fontSize: 21,
    width: 21,
    opacity: 0.84,
    height: 21,
    marginLeft: 18,
    marginRight: 18,
  },
  titulo1: {
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    marginTop: 35,
    marginBottom: 10,
    alignSelf: "center"
  },
  equipo: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 20,
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
    opacity: 0.8,
    fontSize: 16,
    marginRight: 18
  },
  textInput2: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginRight: 19,
    marginLeft: 19,
  },
  controlHoras: {
    height: 29,
    width: 94,
    marginLeft: 20
  },
  textInput2Row: {
    color: "#121212",
    flexDirection: "row",
    // borderBottomWidth: 1,
    // borderColor: "rgba(1,123,146,255)",
    marginTop: 20,
    marginRight: 19,
    marginLeft: 19
  },
  detalleDeParada: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 30,
    marginLeft: 19
  },
  entradaEquipo: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 15,
    marginRight: 19,
    marginLeft: 19,
    marginBottom: 30,
  },
  textInput3: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 15,
    marginRight: 19,
    marginLeft: 19,
    marginBottom: 30,
  },
  EquipoInput: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 25,
    marginRight: 19,
    marginLeft: 19,
    marginBottom: 10,
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
