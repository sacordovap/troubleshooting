
import axios from "axios";
import { URL_BACKEND } from "../enviroments/enviroments";
export const postLogin = async (login) => {
    const rpta = await axios.post(`${URL_BACKEND}/login`, JSON.stringify(login),{
        headers:{"Content-type" : "application/json"}
    });
    return rpta
}
export const getInformacion = async()=>{
    const resp = await fetch(API)
    return await resp.json() 
}