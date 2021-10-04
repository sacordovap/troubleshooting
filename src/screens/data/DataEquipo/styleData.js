import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(249,249,249,1)"
  },
  contenedor_Header: {
    height: 48,
    backgroundColor: "rgba(65,89,111,1)",
    flexDirection: "row",
    marginTop: 24
  },
  icon1: {
    color: "rgba(254,249,249,1)",
    fontSize: 40,
    height: 44,
    width: 15
  },
  ingresoDeDatos1: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 143,
    fontSize: 18,
    textAlign: "center",
    marginLeft: 83,
    marginTop: 12
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 109,
    marginLeft: 10,
    marginTop: 2
  },
  equipo: {
    fontFamily: "helvetica-regular",
    color: "rgba(154,154,157,1)",
    height: 23,
    width: 115,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 10
  },
  tiempo_De_Parada: {
    fontFamily: "helvetica-regular",
    color: "rgba(154,154,157,1)",
    height: 20,
    width: 139,
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
    marginLeft: 10
  },
  horas_Input: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 74,
    lineHeight: 14,
    textAlign: "center"
  },
  stteper: {
    height: 20,
    width: 77,
    marginLeft: 19,
    marginTop: 3
  },
  horas_InputRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 10,
    marginRight: 180
  },
  equipo_Input: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 340,
    borderWidth: 1,
    borderColor: "rgba(215,212,212,1)",
    backgroundColor: "rgba(255,255,255,1)",
    lineHeight: 18,
    fontSize: 16,
    marginTop: -105,
    marginLeft: 10
  },
  detalle_Tiempo_Parada_Input: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 195,
    width: 340,
    lineHeight: 16,
    borderWidth: 1,
    borderColor: "#000000",
    textAlign: "justify",
    
    marginTop: 106,
    marginLeft: 10,
    marginRight:10
  }
});