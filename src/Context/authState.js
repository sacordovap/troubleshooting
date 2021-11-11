import React, { useEffect, useState } from 'react'
import AuthContext from './authContext';

export const AuthState = (props) => {
    const [state, setState] = useState({
        status:false,
        nombre:null,
        apellido:null,
        token:null,
        cargando:null,
    })

    const iniciarSesionContext = (token) => {
        AsyncStorage.setItem('token', token);
        const payloadString = token.split('.')[1]
        const payloadDecrypt = atob(payloadString)
        const payloadJson = JSON.parse(payloadDecrypt)
        setState({
            status: true,
            nombre: payloadJson.name,
            apellido: payloadJson.apellido,
            token: token,
            cargando: false
        })

    }
    const iniciarSesionAsyncStorage =() => {
        const token = AsyncStorage.getItem('token')
        if (token) {
            iniciarSesionContext(AsyncStorage.getItem('token'))
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
