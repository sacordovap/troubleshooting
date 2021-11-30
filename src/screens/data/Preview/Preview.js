import React, { Component, useContext, useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Alert,
    Image
} from "react-native";

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { postCreateData, getEquiment, getEquipmentById } from "../../../services/api";
import { AuthContext } from "../../../Context/authState";

function Preview(props) {


    console.log(props)
  
    const { token } = useContext(AuthContext)

    const [formulario, setFormulario] = useState({
        event: props.route.params.formulario.event,
        date: props.route.params.formulario.date,
        description: "1",
        attributed_cause: props.route.params.formulario.attributed_cause,
        superintendent: props.route.params.formulario.superintendent,
        supervisor: props.route.params.formulario.supervisor,
        operators: props.route.params.formulario.operators,
        downtime: props.route.params.formulario.downtime,
        details: props.route.params.formulario.details,
        take_actions: props.route.params.formulario.take_actions,
        results: props.route.params.formulario.results,
        equipment_id: props.route.params.formulario.equipment_id,
        attachments: props.route.params.formulario.foto1
        
            
        // password: ""
    })
    const handleSubmit = () => {

        postCreateData(formulario, token).then((rpta) => {

            if (rpta.status === 200) {
                console.warn("Subida extitosa")
                props.navigation.navigate('HistorialReporte')
            } else {
                console.warn("Subida errónea")

            }
        }).catch(err => {
            console.log("ERROR EN EL SERVICIO CREARDATA")
            console.warn(err)
        })
        // guardarJobs(formulario).then((rpta) => {
        //     console.warn(rpta)
        // })
        // postCrearImagen(dataFoto).then((rpta) => {
        //     console.log(rpta)
        //     if (rpta.status === 200) {
        //         console.warn("Subida extitosa de la foto")
        //         alert("Carga Exitosa")
        //         console.warn(rpta)
        //         console.warn(rpta.data)
        //     } else {
        //         console.warn("Subida errónea de la foto")
        //         alert("Carga no se cargó")
        //     }
        // }).catch((err) => {
        //     console.log(err)
        // })
    }
    const [hora, setHora] = useState()

    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };

const [equipoNombre, setequipoNombre] = useState(null)

    const obtenerEquipo = () => {
        getEquipmentById(props.route.params.formulario.equipment_id, token).then(rpta=>{
            setequipoNombre(rpta.data.data)
            
            console.log(rpta.data.data);
        })
    }
    useEffect(() => {
      obtenerEquipo()
        setHora(formulario.date)
    }, [])
    console.log(hora);
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            ><View style={styles.rect}>
                    <Text style={styles.tituloIncidente}>Registro de incidente 01</Text>
                    <Text style={styles.fechaTag1}>Fecha</Text>
                    <Text style={styles.fecha2}
                    >{hora?.getDate() + '/' + (hora?.getMonth() + 1) + '/' + hora?.getFullYear()}</Text>
                    <Text style={styles.horaTag1}>Hora</Text>
                    <Text style={styles.hora2}>{ hora?.getHours() + ':' + hora?.getMinutes()}</Text>
                    <Text style={styles.supeintendente1}>Supeintendente</Text>
                    <Text style={styles.superintendenteEntrada}>{props.route.params.formulario.superintendent}</Text>
                    <Text style={styles.supervisores1}>Supervisores</Text>
                    <Text style={styles.ingreseSupervisores}>{props.route.params.formulario.supervisor}</Text>
                    <Text style={styles.operadores1}>Operadores</Text>
                    <Text style={styles.ingreseOperadores}>{props.route.params.formulario.operators}</Text>
                    <Text style={styles.equipo1}>Equipo</Text>
                    <Text style={styles.ingreseEquipo}
                    >{equipoNombre?.name}</Text>
                    <Text style={styles.tiempoDeParada}>Tiempo de parada</Text>
                    <Text style={styles.horas}>{props.route.params.formulario.downtime}</Text>
                    <Text style={styles.detalleDeParada1}>Detalle de Parada</Text>
                    <Text style={styles.ingreseDetalles}>{props.route.params.formulario.details}</Text>
                    <Text style={styles.evento}>Evento</Text>
                    <Text style={styles.detallesEvento}>{props.route.params.formulario.event}</Text>
                    <Text style={styles.causa}>Causa</Text>
                    <Text style={styles.detallesCausa}>{props.route.params.formulario.attributed_cause}</Text>
                    <Text style={styles.accionesTomadas}>Acciones Tomadas</Text>
                    <Text style={styles.accionesDetalle}>{props.route.params.formulario.take_actions}</Text>
                    <Text style={styles.resultados}>Resultados</Text>
                    <Text style={styles.resultadosDetalle}>{props.route.params.formulario.results}</Text>
                    {/* <Text style={styles.conclusiones}>Conclusiones</Text>
                    <Text style={styles.conclusionesDetalle}>{props.route.params.formulario.conclusiones}</Text>
                    <Text style={styles.detallesDeCapturas}>Detalles de capturas</Text> */}
                    {/* <Text style={styles.detallesDeLaFotos}>{props.route.params.formulario.evidenciaDetalle}</Text> */}
                    <View style={styles.imagen_1}>{!!props.route.params.formulario.foto1 && (
                        <Image source={{ uri: props.route.params.formulario.foto1[0]?.base64 }}
                            style={{
                                width: 310,
                                height: 210,
                                marginLeft: 20,
                                marginRight: 20,
                                opacity: 0.9,
                            }} />
                    )}</View>
                    <View style={styles.imagen_2}>{!!props.route.params.formulario.foto1 && (
                        <Image source={{ uri: props.route.params.formulario.foto1[1]?.base64  }}
                            style={{
                                width: 310,
                                height: 210,
                                marginLeft: 20,
                                marginRight: 20,
                                opacity: 0.9,
                            }} />)}
                    </View>
                    <TouchableOpacity
                        style={[styles.containerBotonGuardar, props.style, styles.guardarDataReporte]}
                        onPress={() => { showAlert() }}>
                        <Text style={styles.guardarReporte}>Guardar Reporte</Text>
                    </TouchableOpacity>
                    <AwesomeAlert
                        show={Estado}
                        showProgress={false}
                        title="Registro de Incidente"
                        titleStyle={{ fontSize: 22, marginBottom: 10 }}
                        messageStyle={{ fontSize: 18, marginBottom: 10 }}
                        message="Esta seguro de guardar?"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={true}
                        showConfirmButton={true}
                        cancelText="No"
                        confirmText="Si"
                        cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
                        confirmButtonStyle={{ width: 100, alignItems: 'center' }}
                        confirmButtonColor="#AEDEF4"
                        cancelButtonColor="#DD6B55"
                        onCancelPressed={() => {
                            hideAlert();
                        }}
                        onConfirmPressed={() => {
                            handleSubmit();
                            hideAlert();
                        }}
                    />
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
        marginRight: 10,
        marginLeft: 10
    },
    tituloIncidente: {

        color: "#121212",
        fontSize: 24,
        opacity: 0.75,
        marginTop: 30,
        marginLeft: 38
    },
    fechaTag1: {

        color: "#121212",
        fontSize: 12,
        opacity: 0.6,
        marginTop: 22,
        marginLeft: 30
    },
    fecha2: {

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

        color: "#121212",
        opacity: 0.6,
        fontSize: 12,
        marginTop: 10,
        marginLeft: 30
    },
    hora2: {

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

        color: "#121212",
        opacity: 0.7,
        marginTop: 20,
        marginLeft: 30
    },
    superintendenteEntrada: {

        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    supervisores1: {

        color: "#121212",
        opacity: 0.7,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseSupervisores: {

        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    operadores1: {

        color: "#121212",
        opacity: 0.7,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseOperadores: {

        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    equipo1: {

        color: "#121212",
        width: 83,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseEquipo: {

        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    tiempoDeParada: {

        color: "#121212",
        lineHeight: 12,
        opacity: 0.6,
        width: 112,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    horas: {

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

        color: "#121212",
        width: 110,
        fontSize: 12,
        opacity: 0.6,
        marginTop: 20,
        marginLeft: 30
    },
    ingreseDetalles: {

        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    evento: {

        color: "#121212",
        width: 113,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    detallesEvento: {

        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    causa: {

        color: "#121212",
        width: 282,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    detallesCausa: {

        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    accionesTomadas: {

        color: "#121212",
        width: 200,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    accionesDetalle: {

        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    resultados: {

        color: "#121212",
        width: 113,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    resultadosDetalle: {

        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    conclusiones: {

        color: "#121212",
        width: 120,
        opacity: 0.6,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 30
    },
    conclusionesDetalle: {

        color: "#121212",
        width: 282,
        opacity: 0.6,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 10,
        marginLeft: 30
    },
    detallesDeCapturas: {

        color: "#121212",
        width: 282,
        fontSize: 14,
        opacity: 0.6,
        marginTop: 20,
        marginLeft: 30
    },
    detallesDeLaFotos: {

        color: "#121212",
        width: 282,
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 30
    },
    imagen_1: {
        marginTop: 25,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center'
    },
    imagen_2: {
        marginTop: 25,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center'
    },
    guardarDataReporte: {
        height: 36,
        width: 198,
        marginTop: 40,
    },
    containerBotonGuardar: {
        backgroundColor: "rgba(1,123,146,1)",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
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
        backgroundColor: "rgba(15,15, 15,0.0732)",
        marginTop: 1
    },
    image_imageStyle: {
        opacity: 0.61
    },
});

export default Preview;
