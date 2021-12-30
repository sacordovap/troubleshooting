import * as React from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import Registro_form from '../data/Registro_form/Registro_form';
import HistorialReportesScreen from '../Historial/HistorialReportesScreen';
import Asyncstorage from "@react-native-async-storage/async-storage"
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState, useRef, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";


function Home() {
    return (
        <ImageBackground
            source={require("../../../assets/images/home_image.png")}
            resizeMode="stretch"
            style={styles.image1}
            imageStyle={styles.image1_imageStyle}
        ></ImageBackground>
    );
}
function NewReporte() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Nuevo Reporte</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cerrando Sesión</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Listado de reportes registrados</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation = useNavigation();

    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };

    const cerrarSesion = async () => {
        try {
            await Asyncstorage.removeItem('token')
            navigation.navigate('Login')
        } catch (e) {
            Alert(e)
        }

        console.log('Done.')
    }

    const irHome = () => {
        hideAlert();
        NavigationActions.navigate({ routeName: 'Home' })
    }
   
    return (
        <>
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: '#33A1FF',
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="Antapaccay"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Nuevo Reporte"
                    component={Registro_form}
                    options={{
                        tabBarLabel: 'Nuevo Reporte',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="file-plus" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Historial de Reportes"
                    component={HistorialReportesScreen}
                    options={{
                        tabBarLabel: 'Reportes',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="menu" color={color} size={size} />
                        ),
                    }}
                />
                {/* <Tab.Screen
                name="Cerrar Sesión"
                component={View}
                listeners={{
                    tabPress : () =>{ cerrarSesion()}
                }}
                options={{
                    tabBarLabel: 'Cerrar Sesión',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="logout" color={color} size={size} />
                    ),
                }}
            /> */}


               
                <Tab.Screen
                    name="Cerrar Sesión"
                    component={View}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            showAlert();
                            // Prevent default action


                            // Do something with the `navigation` object
                            // navigation.navigate("Login"); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        },
                    })}
                    options={{
                        tabBarLabel: 'Cerrar Sesión',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="logout" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
            <View>
                <AwesomeAlert
                    show={Estado}
                    showProgress={false}
                    title="Confirmación"
                    titleStyle={{ fontSize: 22, marginBottom: 10 }}
                    messageStyle={{ fontSize: 18, marginBottom: 10 }}
                    message="Está seguro que desea cerrar sesión?"
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

                        irHome()

                    }
                    }
                    onConfirmPressed={() => {
                        hideAlert();
                        cerrarSesion()
                        // navigation.navigate('Login')

                    }}

                />
            </View>
        </>
    );

}

export default function TabNavigationBar() {


    return (

        <MyTabs />

    );
}

const styles = StyleSheet.create({
    image1: {
        backgroundColor: "rgba(15,15, 15,0.0732)",
        height: '105%',
    },
    image1_imageStyle: {
        opacity: 0.61
    },
})