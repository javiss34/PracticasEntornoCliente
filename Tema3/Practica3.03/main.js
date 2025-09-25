//ejercicio1
import { generarCurso } from "./Ejercicios/ejercicio1.js";
let curso = generarCurso("1ºDAW",2025,"Curso muy divertido");

//ejercicio2
import { informeCurso } from "./Ejercicios/ejercicio2.js";
informeCurso(curso);


//ejercicio3
import { discente } from "./Ejercicios/ejercicio3.js";
console.log(discente.imprimirAficiones());
discente.imprimirInforme();

//ejercicio4
curso.matricular(discente);

//ejercicio5
import { mostrarObjeto } from "./Ejercicios/ejercicio5.js";
mostrarObjeto(curso);
mostrarObjeto(discente);

