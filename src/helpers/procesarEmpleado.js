import axios from 'axios';

//Metodos fachada a exportar
export const obtenerEmpleado = async (id) => {
    //return await obtenerEmpleadoAPI(id);
    return await obtenerEmpleadoAxios(id);
}

export const insertarEmpleado = async (body) => {
    return await insertarEmpleadoAxios(body);
}

export const actualizarEmpleado = async (body) => {
    return await actualizarEmpleadoAxios(body);
}

export const borrarEmpleado = async (id) => {
    return await borrarEmpleadoAxios(id);
}

//Metodos de consumo del API
const obtenerEmpleadoAPI = async (id) => {
    const data = await fetch(`http://localhost:8085/ApiNomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}

//GET
const obtenerEmpleadoAxios = async (id) => {
    const data = axios.get(`http://localhost:8085/ApiNomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}

//POST
const insertarEmpleadoAxios = async (body) => {
    //Cabeceras
    const data = axios.post(`http://localhost:8085/ApiNomina/V1/empleados`, body).then(r => r.data)
    console.log(data)
    return data
}

//PUT
const actualizarEmpleadoAxios = async (body) => {
    /*const cabecera = {
        'Acces-Control-Allow-Origin': '*'
    }*/
    const data = axios.put(`http://localhost:8085/ApiNomina/V1/empleados`, body).then(r => r.data)
    console.log(data)
    return data
}

//DELETE
const borrarEmpleadoAxios = async (id) => {
    const data = axios.delete(`http://localhost:8085/ApiNomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}

//export default obtenerEmpleado
//export default borrarEmpleado
export default obtenerEmpleado ;insertarEmpleado ;actualizarEmpleado; borrarEmpleado
//export default actualizarEmpleado
