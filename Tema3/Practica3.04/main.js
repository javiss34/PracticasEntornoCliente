"use strict";

//ejercicio1
let array = ["Sergio","Pedri","Manuel","Abel","Carlos"];
import { conversorMayuscula,ordenarAlfabeticamenteInvero,crearArrayObjeto } from "./Ejercicios/ejercicio1.js";
console.log(conversorMayuscula(array));

console.log(ordenarAlfabeticamenteInvero(array));

console.log(crearArrayObjeto(array));


//ejercicio2
import { crearArrayAleatorio,filtrarMayorQueCinco } from "./Ejercicios/ejercicio2.js";
let array1=crearArrayAleatorio();
let array2=crearArrayAleatorio();
let array3=crearArrayAleatorio();

console.log(filtrarMayorQueCinco(array1,array2,array3));


//ejercicio3
import {insertarUsuario } from "./Ejercicios/ejercicio3.js";
//Insertar usuario
let nuevoUsuario = {
    nombre: "Javier",
    preferencias: { tema: "claro", idioma: "español", edad: 19 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 433",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "holaadios@gmail.com",
      telefono: "111111111",
    }
};
let actualizacionUsuarios = insertarUsuario(nuevoUsuario);
console.log(actualizacionUsuarios);

//Filtrar por +18
import { mayoresDeEdad } from "./Ejercicios/ejercicio3.js";
console.log(mayoresDeEdad(actualizacionUsuarios));//Filtro +18 de todos los usuarios, los que he añadido yo también.

//Filtrar por correo yahoo
import { filtrarCorreoYahoo } from "./Ejercicios/ejercicio3.js";
console.log(filtrarCorreoYahoo(actualizacionUsuarios));

//Filtrar por tema claro, mayores de edad y país de españa
import { filtrarTemaClaroMayorEdadYEspañoles } from "./Ejercicios/ejercicio3.js";
console.log(filtrarTemaClaroMayorEdadYEspañoles(actualizacionUsuarios));

//Filtrar si falta algún dato
import { filtrarPorFaltaDatos } from "./Ejercicios/ejercicio3.js";
console.log(filtrarPorFaltaDatos(actualizacionUsuarios));

//Añadir apellidos. Hago un ejemplo de añadir un apellido al nuevo usuario.
import { añadirApellidos } from "./Ejercicios/ejercicio3.js";
let usuariosConApellidos=añadirApellidos(actualizacionUsuarios);
console.log(usuariosConApellidos);

//Añadir código a dirección
import { añadirCodigoADireccion } from "./Ejercicios/ejercicio3.js";
let usuariosConApellidosYCodigo= añadirCodigoADireccion(usuariosConApellidos);//Creo una variable con el código y los apellidos, todo junto.
console.log(usuariosConApellidosYCodigo);