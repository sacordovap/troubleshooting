import React, { Component, useState } from "react";
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

function DatosInicialesScreen (props) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [horas, setHoras] = useState('');
  console.log(props)
  const [operadores, setOperadores] = useState('');

  /*const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate= new Date(currentDate);
    let fDate= tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
    let fTime=tempDate.getHours()+':'+tempDate.getMinutes();
    setText(fDate);
    setHoras(fTime);
  };*/


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
    props.formulario.superintendente=state.superintendente
    props.formulario.supervisores=state.supervisores
    props.formulario.operadores=state.operadores
  };
  
    
   

  

  return (
    <>
      <View style={[styles.container1,, props.style]}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}
            onPress={() =>props.navigation.navigate('Home')}
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

      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect} multiline>
            <Text style={styles.titulo}>Registro de Incidentes</Text>
            <Text style={styles.fecha_tag}>Fecha</Text>
            <View style={styles.fecha2Row}>
              <Text style={styles.fecha2}>
                {props.formulario.fecha=date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}
              </Text>
              <TouchableOpacity onPress={showDatepicker}>
                <FontAwesomeIcon
                  name="calendar-times-o"
                  style={styles.icon}
                ></FontAwesomeIcon></TouchableOpacity>
            </View>
            <Text style={styles.hora_tag}>Hora</Text>
            <View style={styles.hora2Row}>
              <Text style={styles.hora2}>
                {props.formulario.hora=date.getHours() + ':' + date.getMinutes()}
                </Text>
              <TouchableOpacity onPress={showTimepicker}>
                <FeatherIcon name="clock" style={styles.icon2}></FeatherIcon>
              </TouchableOpacity>
            </View>
            <Text style={styles.superintendente}>Supeintendente</Text>
            <TextInput
             multiline={true}
              placeholder="Ingrese SuperIntendente"
              onChangeText={(value) => handleChangeText('superintendente', value)}
              
              style={styles.textInput}
            ></TextInput>
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
          </View>
        </ImageBackground>
      </ScrollView></>
  );
}


export default DatosInicialesScreen;
