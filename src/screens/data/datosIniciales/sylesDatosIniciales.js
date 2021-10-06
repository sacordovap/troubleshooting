import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
    
  },
  header_Registro_Info_1: {
    height: 39,
    borderWidth: 1,
    borderColor: "rgba(7,252,21,1)",
    backgroundColor: "#fff",
    marginTop: 21
  },
  image: {
    width: 360,
    backgroundColor: "rgba(15,15, 15,0.0732)",
    height: 679,
    flex: 1,
    marginTop: 1
  },
  image_imageStyle: {
    opacity: 0.61
  },
  contenedor_datos: {
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
    marginTop: 24,
    marginLeft: 20
  },
  fecha: {
    height: 60,
    width: 113
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 21,
    width: 21,
    opacity: 0.84,
    height: 21,
    marginLeft: 5,
    marginTop: 30
  },
  fechaRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 22,
    marginRight: 160
  },
  hora: {
    width: 113,
    height: 35,
    marginTop: -1
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 23,
    height: 23,
    width: 23,
    marginLeft: 3,
    marginTop: 6
  },
  horaRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 22,
    marginRight: 160
  },
  superIntendenteInput: {
    height: 96,
    width: 275,
    marginTop: 13,
    marginLeft: 23
  },
  supervisores: {
    height: 90,
    width: 275,
    marginTop: 26,
    marginLeft: 23
  },
  operadores: {
    height: 90,
    width: 275,
    marginTop: 16,
    marginLeft: 23
  }
});
