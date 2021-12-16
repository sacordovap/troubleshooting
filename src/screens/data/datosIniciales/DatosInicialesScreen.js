import React, { Component, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Header from "../../../../components/Header";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import DateTimePicker from '@react-native-community/datetimepicker';
import InputScrollView from 'react-native-input-scroll-view';
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./sylesDatosIniciales";
import { AuthContext } from "../../../Context/authState";
import { getSuperIntendent } from "../../../services/api";
import SearchableDropDown from "react-native-searchable-dropdown";

function DatosInicialesScreen(props) {

  const { token } = useContext(AuthContext)
  console.log(props)
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [state, setState] = useState({
    fecha: '',
    hora: '',
    superintendente: '',
    supervisores: '',
    operadores: ''

  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    // props.formulario.date=currentDate
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value })
    if (nombre === 'superintendente') {
      props.formulario.superintendent = value
    } else if (nombre === 'supervisores') {
      props.formulario.supervisor = value
    } else if (nombre === 'operadores') {
      props.formulario.operators = value
    }
    props.formulario.date = date;
  };

  const [selection, setSelection] = useState()
  const [superIntendent, setSuperIntent] = useState([])
  const [id, setId] = useState(1)
  const traerSuperIntendent = () => {

    getSuperIntendent(token, id).then(rpta => {
      setSuperIntent(rpta.data.data)
    })
  }

  useEffect(() => {
    traerSuperIntendent()
  }, [])



  let arregloOriginal = superIntendent // Aquí almacenamos los nuevos arreglos
  // const LONGITUD_PEDAZOS = 1 // Partir en arreglo de 3
  // for (let i = 0; i < arregloOriginal.length; i += LONGITUD_PEDAZOS) {
  //   let pedazo = arregloOriginal.slice(i, i + LONGITUD_PEDAZOS);
  //   arregloDeArreglos.push( pedazo);
  // }
  // console.log("Arreglo de arreglos: ", arregloDeArreglos); 

  console.log('arreglo ', arregloOriginal);

  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
  }
 
  console.log('list a ' + toObject(arregloOriginal));

  return (
    <>
      <View style={styles.container}>
        {/* <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle} 
        >
          <View style={styles.rect}> */}
        <Text style={styles.titulo}>Registro de Incidentes</Text>

        <View style={styles.fecha2Row}>
          <Text style={styles.fecha_tag}>Fecha</Text>
          <Text style={styles.fecha2}>
            {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}
          </Text>
          <TouchableOpacity onPress={showDatepicker}>
            <FontAwesomeIcon
              name="calendar-times-o"
              style={styles.icon}
            ></FontAwesomeIcon></TouchableOpacity>
        </View>

        <View style={styles.hora2Row}>
          <Text style={styles.hora_tag}>Hora</Text>
          <Text style={styles.hora2}>
            {date.getHours() + ':' + date.getMinutes()}
          </Text>
          <TouchableOpacity onPress={showTimepicker}>
            <FeatherIcon name="clock" style={styles.icon2}></FeatherIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.textInput2Row}>
          <Text style={styles.superintendente}>Super Intendente</Text>
          <SearchableDropDown
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
              width: 207,
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
            items={arregloOriginal}
            //mapping of item array 
            defaultIndex={2}
            //default selected item index
            placeholder="Busqueda rapida"
            //place holder for the search input
            resetValue={false}
            //reset textInput Value with true and false state
            underlineColorAndroid="transparent"
          //To remove the underline from the android input
          />
        </View>
        <TextInput
          defaultValue={selection?.name}
          multiline={true}
          placeholder="Ingrese Super Intendente"
          onChangeText={(value) => handleChangeText('superintendente', value)}
          style={styles.textInput}
        ></TextInput>
        <ScrollView>
          <Text style={styles.supervisores}>Supervisores</Text>
          <TextInput
            placeholder="Ingrese Supervisores"
            multiline={true}
            onChangeText={(value) => handleChangeText('supervisores', value)}
            style={styles.textInput2}
          ></TextInput>
          <Text style={styles.operadores}>Operadores</Text>
          <TextInput
            placeholder="Ingrese Operadores"
            multiline={true}
            onChangeText={(value) => handleChangeText('operadores', value)}
            style={styles.textInput3}
          ></TextInput>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange} />
          )}
          {/* </View>
        </ImageBackground> */}
        </ScrollView>
      </View></>
  );
}


export default DatosInicialesScreen;
