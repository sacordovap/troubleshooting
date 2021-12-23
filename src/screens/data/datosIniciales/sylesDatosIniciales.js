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
  header_Registro_Info_1: {
    height: 39,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    backgroundColor: "rgba(1,123,146,255)",
    marginTop: 21

  },
  image: {
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: '105%',
    marginTop: 1
  },
  image_imageStyle: {
    opacity: 0.61
  },
  rect: {
    height: 608,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "#E4E9F7",
    borderRadius: 36,
    shadowColor: "rgba(7,252,21,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.41,
    shadowRadius: 0,
    marginBottom: 27,
    marginTop: 27,
    marginLeft: 20,
    marginRight:20
  },
  titulo: {
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    marginTop: 35,
    marginBottom:10,
    alignSelf: "center"
  },
  fecha_tag: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
  },
  fecha2: {
    color: "#696969",
    opacity: 0.8,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    width: 89, 
    height: 19,
    textAlign: "center",
    marginLeft: 25,
  },
  icon: {
    color: "#74a7e2",
    fontSize: 21,
    width: 21,
    opacity: 0.84,
    height: 21,
    marginLeft: 23
  },
  fecha2Row: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 19,
  },
  hora_tag: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
  },
  hora2: {
    color: "#696969",
    height: 19,
    width: 89,
    opacity: 0.8,
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    textAlign: "center",
    marginLeft:33,
  },
  icon2: {
    color: "#74a7e2",
    fontSize: 23,
    height: 23,
    width: 23,
    marginLeft: 21
  },
  hora2Row: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 19,
  },
  textInput2Row: {
    color: "#121212",
    flexDirection: "row",
    // borderBottomWidth: 1,
    // borderColor: "rgba(1,123,146,255)",
    marginTop:5,
    marginRight: 19,
    marginLeft: 19
  },
  superintendente: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 15,
  },
  textInput: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 10,
    marginRight: 19,
    marginLeft: 19
  },
  supervisores: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 19
  },
  textInput2: {
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 5,
    marginRight: 19,
    marginLeft: 19
  },
  operadores: {
    color: "#121212",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 19
  }, 
  textInput3: { 
    color: "#696969",
    borderBottomWidth: 1,
    borderColor: "rgba(1,123,146,255)",
    marginTop: 5,
    marginRight: 19,
    marginLeft: 19,
    marginBottom:30,
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

