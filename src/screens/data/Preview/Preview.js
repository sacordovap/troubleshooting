import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity,ImageBackground } from "react-native";

function Preview(props) {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
          source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
            <View style={styles.rect}>
                <Text style={styles.tituloIncidente}>Registro de incidente 01</Text>

                <Text style={styles.fechaTag1}>Fecha</Text>
                <Text style={styles.fecha2}>{props.route.params.formulario.fecha}</Text>

                <Text style={styles.horaTag1}>Hora</Text>
                <Text style={styles.hora2}>{props.route.params.formulario.hora}</Text>

                <Text style={styles.supeintendente1}>Supeintendente</Text>
                <Text style={styles.text6}>{props.route.params.formulario.superintendente}</Text>

                <Text style={styles.supervisores1}>Supervisores</Text>
                <Text style={styles.ingreseSupervisores}>{props.route.params.formulario.supervisores}</Text>

                <Text style={styles.operadores1}>Operadores</Text>
                <Text style={styles.ingreseOperadores}>{props.route.params.formulario.operadores}</Text>

                <Text style={styles.equipo1}>Equipo</Text>
                <Text style={styles.ingreseEquipo}>{props.route.params.formulario.equipo}</Text>

                <Text style={styles.tiempoDeParada}>Tiempo de parada</Text>
                <Text style={styles.horas}>{props.route.params.formulario.tiempoParada}</Text>

                <Text style={styles.detalleDeParada1}>Detalle de Parada</Text>
                <Text style={styles.ingreseDetalles}>{props.route.params.formulario.detalleParada}</Text>

                <Text style={styles.evento}>Evento</Text>
                <Text style={styles.detallesEvento}>{props.route.params.formulario.evento}</Text>

                <Text style={styles.causa}>Causa</Text>
                <Text style={styles.detallesCausa}>{props.route.params.formulario.causa}</Text>

                <Text style={styles.accionesTomadas}>Acciones Tomadas</Text>
                <Text style={styles.accionesDetalle}>{props.route.params.formulario.accionesTomadas}</Text>

                <Text style={styles.resultados}>Resultados</Text>
                <Text style={styles.resultadosDetalle}>{props.route.params.formulario.resultado}</Text>

                <Text style={styles.conclusiones}>Conclusiones</Text>
                <Text style={styles.conclusionesDetalle}>{props.route.params.formulario.conclusiones}</Text>

                <Text style={styles.detallesDeCapturas}>Detalles de capturas</Text>
                <Text style={styles.detallesDeLaFotos}>{props.route.params.formulario.evidenciaDetalle}</Text>


                <View style={styles.imagen_1}></View>
                <View style={styles.imagen_2}></View>

                <TouchableOpacity style={[styles.containerBotonGuardar, props.style, styles.guardarDataReporte]}>
                    <Text style={styles.guardarReporte}>Guardar Reporte</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rect: {
        width: 345,
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
        marginBottom: 25,
        marginTop: 30,
        marginLeft: 8
    },
    tituloIncidente: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 24,
        opacity: 0.75,
        marginTop: 30,
        marginLeft: 38
    },
    fechaTag1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12,
        opacity: 0.6,
        marginTop: 22,
        marginLeft: 30
    },
    fecha2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        opacity: 0.8,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        width: 89,
        height: 19,
        textAlign: "center",
        marginTop: 8,
        marginLeft: 30,
        marginRight: 111

    },
    horaTag1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        opacity: 0.6,
        fontSize: 12,
        marginTop: 10,
        marginLeft: 30
    },
    hora2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 21,
        opacity: 0.8,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        width: 89,
        marginLeft: 30,
        marginRight: 109,
        borderBottomWidth: 1,
        textAlign: "center",
        marginTop: 10
    },
    supeintendente1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        opacity: 0.7,
        marginTop: 20,
        marginLeft: 30
    },
    text6: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    supervisores1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        opacity: 0.7,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseSupervisores: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    operadores1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        opacity: 0.7,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseOperadores: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    equipo1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 83,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseEquipo: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    tiempoDeParada: {
        fontFamily: "roboto-regular",
        color: "#121212",
        lineHeight: 12,
        opacity: 0.6,
        width: 112,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    horas: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 83,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    detalleDeParada1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 110,
        fontSize: 12,
        opacity: 0.6,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseDetalles: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    evento: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 113,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    detallesEvento: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    causa: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    detallesCausa: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    accionesTomadas: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 200,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    accionesDetalle: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    resultados: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 113,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    resultadosDetalle: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    conclusiones: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 120,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    conclusionesDetalle: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    detallesDeCapturas: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        fontSize: 14,
        opacity: 0.6,
        marginTop: 20,
        marginLeft: 30
    },
    detallesDeLaFotos: {
        fontFamily: "roboto-regular",
        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    imagen_1: {
        width: 184,
        height: 143,
        backgroundColor: "#E6E6E6",
        marginTop: 25,
        marginLeft: 80
    },
    imagen_2: {
        width: 182,
        height: 153,
        backgroundColor: "#E6E6E6",
        marginTop: 29,
        marginLeft: 81
    },
    guardarDataReporte: {
        height: 36,
        width: 198,
        marginTop: 40,
        marginLeft: 78
    },
    containerBotonGuardar: {
        backgroundColor: "rgba(1,123,146,1)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 20
    },
    guardarReporte: {
        color: "#fff",
        fontSize: 14
    },
    image: {
        width: 360,
        backgroundColor: "rgba(15,15, 15,0.0732)",
        marginTop: 1
      },
      image_imageStyle: {
        opacity: 0.61
      },
});

export default Preview;
