const API ='http://localhost:8080'

export const getInformacion = async()=>{
    const resp = await fetch(API)
    return await resp.json() 
}