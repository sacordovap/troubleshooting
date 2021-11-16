
import axios from "axios";
import { URL_BACKEND } from "../enviroments/enviroments";
export const postLogin = async (login) => {
    const rpta = await axios.post(`${URL_BACKEND}/login`, JSON.stringify(login), {
        headers: { "Content-type": "application/json" }
    });
    return rpta
}

export const getAllData = async () => {
    const rpta = await auth.get(`${URL_BACKEND}/troubleshooting/getAll`)
    return rpta
}

export const getDataByID = async (id) => {
    const rpta = await axios.get(`${URL_BACKEND}/troubleshooting/getEspecific/${id}`)
    return rpta
}

export const deleteDataByID = async (id) => {
    const rpta = await axios.delete(`${URL_BACKEND}/troubleshooting/delete/${id}`)
    return rpta
}

export const postCreateData = async (data, token) => {
    const rpta = await axios.post(`${URL_BACKEND}/troubleshooting/create`)
    JSON.stringify(data),
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return rpta
}

export const editData = async (id) => {
    const rpta = await axios.put(`${URL_BACKEND}/troubleshooting/update/${id}`)
    return rpta
}




export const getInformacion = async () => {
    const resp = await fetch(API)
    return await resp.json()
}