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
