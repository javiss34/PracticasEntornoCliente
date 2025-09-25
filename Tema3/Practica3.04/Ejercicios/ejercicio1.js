"use strict";

export const conversorMayuscula = (array) => {
    return array.map(elemento => elemento.toUpperCase());//map siempre devuelve un nuevo array por lo que no hay que hacer copia.
}

export const ordenarAlfabeticamenteInvero = (array) => { 
    return [...array].sort().reverse(); //Hago copia para que no modifique el array original.
}

export const crearArrayObjeto = (array) => {
    let nuevoArray=[];
    let id = 0;
    for (const element of array) {
        nuevoArray.push({id,element});
        id++;
    }
    return nuevoArray;
    
}

export const crear = (array) => array.map((nombre,id)=>({id:id,nombre:nombre}));
