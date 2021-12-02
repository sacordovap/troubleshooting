import axios from "axios";
import { URL_BACKEND } from "../enviroments/enviroments";

//
export const postLogin = async (login) => {
    const rpta = await axios.post(`${URL_BACKEND}/login`, JSON.stringify(login), {
        headers: { "Content-type": "application/json" }
    });
    return rpta
}

// Estos son servicios externos

export const guardarJobs = async (jobs) => {
    const rpta = await axios.post(`https://reqres.in/api/register`, JSON.stringify(jobs), {
        headers: { "Content-type": "application/json" }
    })
    return rpta
}


export const postCreateData = async (data, token) => {
    const rpta = await axios.post(`${URL_BACKEND}/troubleshooting/create`,
        JSON.stringify(data),
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
            }
        })
    return rpta
}

export const postCrearImagen = async (data) => {
    const rpta = await axios.post(`${URL_BACKEND}/attachment/create`,
        `
           
                ${JSON.stringify(data)}
            
        `,
        { headers: { 'Content-Type': 'application/json' } })
    return rpta
}



export const getTroubleShooting = async (token) => {
    const rpta = await axios.get(`${URL_BACKEND}/troubleshooting/getAll`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return rpta
}
export const getTroubleShootingById = async (id, token) => {
    const rpta = await axios.get(`${URL_BACKEND}/troubleshooting/getEspecific/${id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return rpta
}

export const putTroubleshootingUpdate = async (token, data, id) => {
    const rpta = await axios.put(`${URL_BACKEND}/troubleshooting/update/${id}`,
        JSON.stringify(data),
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
            }
        })
    return rpta
}

export const deleteTroubleshootingById = async (id, token) => {

    const rpta = axios.delete(`${URL_BACKEND}/troubleshooting/delete/${id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return rpta
}


// Estos

export const getEquiment = async (token) => {
    const rpta = await axios.get(`${URL_BACKEND}/equipments/getAll`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return rpta
}


export const getEquipmentById = async (id, token) => {
    const rpta = await axios.get(`${URL_BACKEND}/equipments/getEspecific/${id}?all=1`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return rpta
}


// Get Superintendent
export const getSuperIntendent = async (token, id) => {
    const rpta = await axios.get(`${URL_BACKEND}/troubleshooting/getUserTrobuleshooting?type=${id}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return rpta
}