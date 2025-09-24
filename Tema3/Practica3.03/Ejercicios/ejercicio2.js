"use strict";

export const informeCurso = (curso) => {
    for(let element in curso){
        let valor = Array.isArray(curso[element]) ? curso[element].join(", ") : curso[element];//Si es un array devuelve el array en formato(", ") y sino devuelve el valor
        console.log(`${element}: ${valor}`);
    }
}