import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Header from "../../../../components/Header";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import DateTimePicker from '@react-native-community/datetimepicker';

export const DatosInicialesScreen= () => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText]=useState('');
  const [horas, setHoras]=useState('');

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

  return (
    <View style={styles.container}>
      
      <Header style={styles.header_Registro_Info_1}></Header>
      <ImageBackground
        source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.rect}>
          <Text style={styles.titulo}>Registro de Incidentes</Text>
          <Text style={styles.fecha_tag}>Fecha</Text>
          <View style={styles.fecha2Row}>
            <Text style={styles.fecha2}>{date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()}</Text>
            <TouchableOpacity onPress={showDatepicker} >
            <FontAwesomeIcon
              name="calendar-times-o"
              style={styles.icon}
            ></FontAwesomeIcon></TouchableOpacity>
          </View>
          <Text style={styles.hora_tag}>Hora</Text>
          <View style={styles.hora2Row}>
            <Text style={styles.hora2}>{date.getHours()+':'+date.getMinutes()}</Text>
            <TouchableOpacity onPress={showTimepicker} >
              <FeatherIcon name="clock" style={styles.icon2}></FeatherIcon>
              </TouchableOpacity >
          </View>
          <Text style={styles.superintendente}>Supeintendente</Text>
          <TextInput
          autoFocus
            placeholder="Ingrese SuperIntendente"
            style={styles.textInput}
          ></TextInput>
          <Text style={styles.supervisores}>Supervisores</Text>
          <TextInput
          autoFocus
            placeholder="Ingrese Supervisores"
            multiline={true}
            style={styles.textInput2}
          ></TextInput>
          <Text style={styles.operadores}>Operadores</Text>
          <TextInput
          autoFocus
            placeholder="Ingrese Operadores"
            multiline={true}
            style={styles.textInput3}
          ></TextInput>{show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />            
          )}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  header_Registro_Info_1: {
    height: 39,    
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    backgroundColor: "#fff",

  },
  image: {
    width: 360,
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: 679,
    marginTop: 1
  },
  image_imageStyle: {
    opacity: 0.61
  },
  rect: {
    width: 321,
    height: 608,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(197,196,196,1)",
    borderRadius: 36,
    shadowColor: "rgba(7,252,21,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    shadowRadius: 0,
    marginTop: 27,
    marginLeft: 20
  },
  titulo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    opacity: 0.78,
    width: 243,
    height: 29,
    marginTop: 29,
    marginLeft: 39
  },
  fecha_tag: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.6,
    marginTop: 35,
    marginLeft: 30
  },
  fecha2: {
      color: "#121212",
    opacity: 0.6,
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    width: 89,
    height: 19,
    textAlign: "center",
    marginTop: 2
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 21,
    width: 21,
    opacity: 0.84,
    height: 21,
    marginLeft: 23
  },
  fecha2Row: {
    height: 21,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 30,
    marginRight: 158
  },
  hora_tag: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.6,
    fontSize: 12,
    marginTop: 7,
    marginLeft: 30
  },
  hora2: {
  
    color: "#121212",
    height: 19,
    width: 89,
    opacity: 0.6,
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    textAlign: "center",
    marginTop: 2
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 23,
    height: 23,
    width: 23,
    marginLeft: 21
  },
  hora2Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 30,
    marginRight: 158
  },
  superintendente: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.7,
    marginTop: 30,
    marginLeft: 30
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 36,
    width: 263,
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    marginTop: 6,
    marginLeft: 30
  },
  supervisores: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.7,
    marginTop: 21,
    marginLeft: 30
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 263,
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    marginTop: 9,
    marginLeft: 30
  },
  operadores: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.7,
    marginTop: 20,
    marginLeft: 30
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 51,
    width: 263,
    borderBottomWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    marginTop: 15,
    marginLeft: 30
  }
});

export default DatosInicialesScreen;
