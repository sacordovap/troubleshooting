import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import Header from "../../../../components/Header";
import Icon from "react-native-vector-icons/Entypo";
import BotonGuardarInicial from "../../../../components/BotonGuardarInicial";
import * as ImagePicker from 'expo-image-picker';


function EvidenciaFotoScreen(props) {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,

      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,

      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };


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
        <View style={styles.rect}>
          <Text style={styles.titulo1}>Registro de Incidentes</Text>
          <Text style={styles.evidencias}>Evidencias</Text>
          <TextInput
            placeholder="Detalles de las Evidencias"
            style={styles.textInput}
          ></TextInput>
          <View style={styles.iconoFoto}>
            <View style={styles.iconStack}>
              <Icon
                name="camera"
                style={styles.icon}>
              </Icon>
              <Icon onPress={pickImage}
                name="upload" style={styles.icon1}></Icon>
            </View>
            <View style={styles.Foto1}>
              {image && (
                <Image source={{ uri: image }}
                  style={{
                    width: 164,
                    height: 106,
                    opacity: 0.9,
                  }} />
              )}</View>
          </View>

          <View style={styles.fotosConjunto}>
            <View style={styles.iconos}>
              <Icon
                name="camera" style={styles.camera}></Icon>
              <Icon onPress={pickImage2}
                name="upload" style={styles.archivos}></Icon>
            </View>
            <View style={styles.fotoTomada}>{image2 && (
              <Image source={{ uri: image2 }}
                style={{
                  width: 164,
                  height: 106,                  
                  opacity: 0.9,
                }} />
            )}</View>
          </View>

          <BotonGuardarInicial
            style={styles.cupertinoButtonSuccess}
          ></BotonGuardarInicial>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50

  },
  headerRegistro1: {
    height: 39,
    marginTop: 21,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,1)",
    backgroundColor: "rgba(1,123,146,1)",

  },
  camera: {
    color: "rgba(128,128,128,0.65)",
    fontSize: 32,
    height: 44,
    width: 40
  },
  archivos: {
    color: "rgba(128,128,128,0.65)",
    fontSize: 32,
    height: 44,
    width: 40
  },
  iconos: {
    width: 40,
    marginTop: 9,
    marginBottom: 9
  },
  fotosConjunto: {
    height: 106,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 37,
    marginRight: 53
  },
  image1: {
    width: 360,
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: 679,
    marginTop: 1,
    paddingBottom: 5

  },
  iconoFoto: {
    height: 106,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 37,
    marginRight: 53
  },
  fotoTomada: {
    width: 164,
    height: 106,
    backgroundColor: "#FFFFFF",
    marginLeft: 27
  },
  image1_imageStyle: {
    opacity: 0.61
  },
  rect: {
    width: 321,
    height: 616,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(197,196,196,1)",
    borderRadius: 36,
    shadowColor: "rgba(1,123,146,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 5
  },
  iconStack: {
    width: 40,
    marginTop: 10,
    marginBottom: 8
  },
Foto1: {
    width: 164,
    height: 106,
    backgroundColor: "#FFFFFF",
    marginLeft: 27
  },
  titulo1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    opacity: 0.78,
    width: 243,
    height: 29,
    marginTop: 26,
    marginLeft: 39
  },
  evidencias: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.6,
    fontSize: 12,
    marginTop: 27,
    marginLeft: 20
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 268,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,1)",
    opacity: 0.6,
    textAlign: "left",
    marginTop: 18,
    marginLeft: 20
  },
  icon: {
    color: "rgba(128,128,128,0.65)",
    fontSize: 32,
    height: 44,
    width: 40
  },
  icon1: {
    color: "rgba(128,128,128,0.65)",
    fontSize: 32,
    height: 44,
    width: 40
  },
  cupertinoButtonSuccess: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 92,

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
    fontFamily: "roboto-regular",
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

export default EvidenciaFotoScreen;
