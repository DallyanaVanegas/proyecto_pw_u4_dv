!<template>
  <input v-model="id" type="text" />
  <input v-model="nombre" type="text" />
  <button @click="consultar">Consultar</button>
  <button @click="insertar">Insertar</button>
  <button @click="actualizar">Actualizar</button>
  <button @click="eliminar">Eliminar</button>
</template>

<script>
import {
  obtenerEmpleado,
  insertarEmpleado,
  actualizarEmpleado,
  borrarEmpleado,
} from "../helpers/procesarEmpleado.js";
export default {
  data() {
    return {
      id: null,
      nombre: null,
    };
  },
  methods: {
    async consultar() {
      const response = await obtenerEmpleado(this.id);
      console.log(response)
    },
    async eliminar() {
      const response = await borrarEmpleado(this.id);
      console.log(response)
    },
    async insertar() {
      const empl = {
        id: this.id,
        nombre: this.nombre,
        apellido: "Teran",
        fechaNacimiento: "2000-03-09T00:00:00",
        salario: 100,
      };

      const response= await insertarEmpleado(empl);

      console.log(response)
    },
    async actualizar() {
      const empl = {
        id: 1,
        nombre: this.id,
        apellido: this.nombre,
        fechaNacimiento: "2000-03-09T00:00:00",
        salario: 150,
      };
      await actualizarEmpleado(empl);
    },
  },
};
</script>

<style>
</style>