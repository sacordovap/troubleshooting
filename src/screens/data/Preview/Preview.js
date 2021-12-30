import React, { Component, useContext, useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Alert,
    Image,
    ActivityIndicator
} from "react-native";

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { postCreateData, getEquiment, getEquipmentById } from "../../../services/api";
import { AuthContext } from "../../../Context/authState";
import format from "date-fns/format";
import { CommonActions } from "@react-navigation/native";

function Preview(props) {


    console.log(props)

    const { token } = useContext(AuthContext)

    const [formularioInicial, setFormularioInicial] = useState({
        date: '',
        description: '',
        superintendent: '',
        supervisor: '',
        operators: '',
        equipment_id: '',
        downtime: 0,
        details: '',
        event: '',
        attributed_cause: '',
        take_actions: '',
        results: '',
        // conclusiones: '',
        // evidenciaDetalle: '',
        foto1: []
    })

    const [formulario, setFormulario] = useState({
        event: props.route.params.formulario.event,
        date: props.route.params.formulario.date,
        description: props.route.params.formulario.equipment_id,
        attributed_cause: props.route.params.formulario.attributed_cause,
        superintendent: props.route.params.formulario.superintendent,
        supervisor: props.route.params.formulario.supervisor,
        operators: props.route.params.formulario.operators,
        downtime: props.route.params.formulario.downtime,
        details: props.route.params.formulario.details,
        take_actions: props.route.params.formulario.take_actions,
        results: props.route.params.formulario.results,
        // equipment_id: props.route.params.formulario.equipment_id,
        equipment_id: props.route.params.formulario.equipment_id,
        attachments: props.route.params.formulario.foto1
        // password: ""
    })

    console.log(props)

    const handleSubmit = () => {
        startLoading()
        postCreateData(formulario, token).then((rpta) => {
        
            if (rpta.status === 200) {
                setLoading(false)
                props.navigation.push('Tabs', { screen: 'Historial de Reportes' })
                
            } else {
                console.warn("Subida errónea")
                setLoading(false)
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
        getEquipmentById(props.route.params.formulario.equipment_id, token).then(rpta => {
            setequipoNombre(rpta.data.data)

            console.log(rpta.data.data);
        })
    }
    useEffect(() => {
        obtenerEquipo()
        setHora(formulario.date)
    }, [])

    console.log(hora);

    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    };


    var formattedDate = format(props.route.params.formulario?.date, "MMMM do, yyyy H:mma");

    console.log(formattedDate);

    return (
        <ScrollView style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    //visibility of Overlay Loading Spinner
                    visible={loading}
                    //Text with the Spinner
                    size="large"
                    color="#f4c47c"
                    //Text style of the Spinner Text
                    textStyle={styles.spinnerTextStyle}
                />
            ) : (
                <>

                    {/* <ImageBackground
                source={require("../../../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA1.jpg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            ><View style={styles.rect}> */}
                    <Text style={styles.tituloIncidente}>Registro de incidente</Text>
                    <Text style={styles.fechaTag1}>Fecha</Text>
                    <Text style={styles.fecha2}
                    >{formattedDate}</Text>
                    {/* <Text style={styles.horaTag1}>Hora</Text>
                    <Text style={styles.hora2}>{ hora?.getHours() + ':' + hora?.getMinutes()}</Text> */}
                    <Text style={styles.supeintendente1}>Supeintendente</Text>
                    <Text style={styles.superintendenteEntrada}>{props.route.params.formulario.superintendent}</Text>
                    <Text style={styles.supervisores1}>Supervisores</Text>
                    <Text style={styles.ingreseSupervisores}>{props.route.params.formulario.supervisor}</Text>
                    <Text style={styles.operadores1}>Operadores</Text>
                    <Text style={styles.ingreseOperadores}>{props.route.params.formulario.operators}</Text>
                    <Text style={styles.equipo1}>Equipo</Text>
                    <Text style={styles.ingreseEquipo}
                    >{equipoNombre?.name}</Text>
                    <Text style={styles.tiempoDeParada}>Tiempo de parada en Horas</Text>
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
                        <Image source={{ uri: props.route.params.formulario.foto1[1]?.base64 }}
                            style={{
                                width: 310,
                                height: 210,
                                marginLeft: 20,
                                marginRight: 20,
                                opacity: 0.9,
                            }} />)}
                    </View>
                    <TouchableOpacity
                        style={[styles.containerBotonGuardar, styles.guardarDataReporte]}
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
                    {/* </View>
            </ImageBackground> */}
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "rgba(1,123,146,255)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        elevation: 5,
        marginTop: 21,
        shadowOpacity: 0.41,
        marginBottom: 3,
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
        fontSize: 26,
        textAlign: "center",
        marginTop: 35,
        marginBottom: 10,
        alignSelf: "center"
    },
    fechaTag1: {

        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    fecha2: {
        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19

    },
    horaTag1: {

        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    hora2: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    supeintendente1: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    superintendenteEntrada: {
        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    supervisores1: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    ingreseSupervisores: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    operadores1: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    ingreseOperadores: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    equipo1: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    ingreseEquipo: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    tiempoDeParada: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    horas: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        width: 83,
        marginLeft: 19,
        textAlign: "center",
    },
    detalleDeParada1: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    ingreseDetalles: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    evento: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    detallesEvento: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    causa: {
        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    detallesCausa: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    accionesTomadas: {

        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    accionesDetalle: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    resultados: {

        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    resultadosDetalle: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    conclusiones: {

        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    conclusionesDetalle: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
    },
    detallesDeCapturas: {

        color: "#121212",
        opacity: 0.8,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 19
    },
    detallesDeLaFotos: {

        color: "#696969",
        borderBottomWidth: 1,
        borderColor: "rgba(1,123,146,255)",
        marginTop: 15,
        marginRight: 19,
        marginLeft: 19
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
        marginTop: 15,
        alignSelf: "center"
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
        backgroundColor: "rgba(15,15, 15,0.0732)",
        marginTop: 1
    },
    image_imageStyle: {
        opacity: 0.61
    },
});

export default Preview;
