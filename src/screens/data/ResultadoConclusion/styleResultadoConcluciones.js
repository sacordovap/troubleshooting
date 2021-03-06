import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor:"rgba(1,123,146,255)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    marginBottom:3
  },
  header_Registro: {
    height: 39,
    borderWidth: 1, 
    borderColor:"rgba(1,123,146,255)",
    backgroundColor: "rgba(1,123,146,255)",
  },
  image1: {
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: '105%',
  },
  image1_imageStyle: {
    opacity: 0.61
  },
  resultados: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 19
  },
 
  concluciones: {
    color: "#121212",
    opacity: 0.6,
    fontSize: 15,
    marginTop: 32,
    marginLeft: 19
  },
  contenedorDatos1: {
    height: '100%',
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(197,196,196,1)",
    borderRadius: 20,
    shadowColor:"rgba(1,123,146,255)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    shadowRadius: 0,
    marginTop: 30,
    marginBottom:1
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
    fontSize: 26,
    textAlign: "center",
    marginTop: 35,
    marginBottom:10,
    alignSelf: "center"
  },
  equipo: {
    color: "#121212",
    height: 13,
    width: 83,
    opacity: 0.6,
    fontSize: 12,
    marginTop: 32,
    marginLeft: 19
  },
  textInput: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 15,
    marginRight: 19,
    marginLeft: 19
  },
  tiempoDeParada: {
    color: "#121212",
    lineHeight: 12,
    opacity: 0.6,
    marginTop: 27,
    marginLeft: 19
  },
  textInput2: {
    color: "#121212",
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
    fontSize: 12,
    opacity: 0.6,
    marginTop: 18,
    marginLeft: 19
  },
  textInput3: {
    color: "#121212",
  
    width: 282,
    borderBottomWidth: 1,
    borderColor:"rgba(1,123,146,255)",
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
    borderColor:"rgba(1,123,146,255)",
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
    color:  "rgba(255,255,255,255)",
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.28,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {}
});
