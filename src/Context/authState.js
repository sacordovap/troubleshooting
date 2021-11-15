import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Base64 } from 'js-base64';

import AuthContext from './authContext';

export const AuthState = (props) => {
    const [state, setState] = useState({
        status:false,
        nombre:null,

        token:null,
        cargando:true,
    })

    const iniciarSesionContext = (token) => {
        AsyncStorage.setItem('token', token);
        
        token = JSON.stringify(token);
        const payloadString = token.split(".")[1]
        
        // const payloadDecrypt =   window.btoa(unescape(encodeURIComponent( payloadString )))
        
        // console.log(payloadDecrypt)
        // const payloadJson = JSON.parse(JSON.stringify(payloadDecrypt))
        const payloadJson = JSON.parse(token)
        
        setState({
            status: true,
            nombre: "Prueba",
            token: token,
            cargando: false
        })

    }
    const iniciarSesionAsyncStorage =() => {
        const token = AsyncStorage.getItem('token')
        if (token) {
            iniciarSesionContext(token)
        }
    }

    useEffect(() => {
     iniciarSesionAsyncStorage()
    }, [])

    return (
        <AuthContext.Provider value={{ 
            ...state,iniciarSesionContext
        }}>{props.children}</AuthContext.Provider> 
    )
}
