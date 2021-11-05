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
  Dimensions,
  Button,
  ScrollView,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import * as ImagePicker from 'expo-image-picker';
import Icons from "react-native-vector-icons/Ionicons";


function EvidenciacameraScreen(props) {
  const initialState = {
    evidenciaDetalle: ''
  }

  const [evidencia, setEvidencia] = useState(initialState);

  const handleChangeText = (nombre, value) => {
    setEvidencia({ ...evidencia, [nombre]: value })
    if (nombre==='evidenciaDetalle') {
      props.formulario.evidenciaDetalle= value
     } 
     props.formulario.foto1 = pickedImagePath.uri
     props.formulario.foto2 = pickedImagePath2.uri
  };
  console.log(props)
  // el  path de las imagenes
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [pickedImagePath2, setPickedImagePath2] = useState('');

  // funccion lanzada cuando se pulsa el boton subir imagen
  const showImagePicker = async () => {
    // Apreguntar por los permisos
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Te has negado a permitir que esta aplicación acceda a tus fotos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      props.setActivarBoton(true)
      props.formulario.foto1 = result.uri
    }
  }

  // funcion lanza la camara para capturar imagenes
  const openCamera = async () => {
    // pregunta por los permisos
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Te has negado a permitir que esta aplicación acceda a tu cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result)

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      props.setActivarBoton(true)
      props.formulario.foto1 = result.uri
    }
  }
  const showImagePicker2 = async () => {
    //permisos
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Te has negado a permitir que esta aplicación acceda a tus fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();


    if (!result.cancelled) {
      setPickedImagePath2(result.uri);
      props.setActivarBoton(true)
      props.formulario.foto2 = result.uri
    }
  }
  const openCamera2 = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Te has negado a permitir que esta aplicación acceda a tu cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath2(result.uri);
      
      props.setActivarBoton(true)
      props.formulario.foto2 = result.uri
    }
  }


  return (
    <><ScrollView style={styles.container}>
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
            placeholder="Detalles de las fotos"
            multiline={true}
            onChangeText={(value) => handleChangeText('evidenciaDetalle', value)}
            style={styles.textInput}
          ></TextInput>
          
          <View style={styles.buttonContainer}>
            <Icon onPress={showImagePicker}
              name="upload" style={styles.camera}></Icon>
            <Icon onPress={openCamera}
              name="camera" style={styles.archivos}></Icon>
          </View>
        
          <View style={styles.imageContainer}>
          <Text style={styles.evidenciasFoto}>Evidencia Captura 1</Text>
            {
              pickedImagePath !== '' && <Image
                source={{ uri: pickedImagePath }}
                style={styles.image} 
              />
            }
          </View>

          <View style={styles.buttonContainer}>
            {/*           
            <Button  title="Subir Imagen" />
            <Button  title="Tomar Foto" /> */}
            <Icon onPress={showImagePicker2}
              name="upload" style={styles.camera}></Icon>
            <Icon onPress={openCamera2}
              name="camera" style={styles.archivos}></Icon>
          </View>         
          <View style={styles.imageContainer}>
          <Text style={styles.evidenciasFoto}>Evidencia Captura 2</Text>
            {
              pickedImagePath2 !== '' && <Image
                source={{ uri: pickedImagePath2 }}
                style={styles.image}
              />
            }
          </View>
        </View>
      </ImageBackground>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,       

  },
  containerGuardarDataInicial: {
    backgroundColor: "rgba(1,123,146,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,

  },
  guardarInformacion: {
    color: "#fff",
    fontSize: 17,
  },

  containerButton: {
    backgroundColor: "rgba(1,123,146,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16

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
    height: 660,
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
    marginRight:20,
    marginBottom: 30
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
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    opacity: 0.78,
    height: 29,
    marginTop: 26,
  },
  evidencias: {
    color: "#121212",
    opacity: 0.6,
    fontSize: 12,
    marginTop: 27,
    marginLeft: 20
  },
  evidenciasFoto: {
    color: "#121212",
    opacity: 0.6,
    fontSize: 12,
  },
  textInput: {
    color: "#121212",
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
    lineHeight: 17,
    color: "rgba(255,255,255,255)",
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.28,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {},
  buttonContainer: {
    marginTop:10,
    width: 320,
    flexDirection: 'row',
    justifyContent: "center",
  },
  imageContainer: {      
    alignItems: 'center',
    padding: 15
  },
  image: {
    width: 200,
    height: 150,
    marginBottom:5,
    resizeMode: 'cover'
  }
});

export default EvidenciacameraScreen;
