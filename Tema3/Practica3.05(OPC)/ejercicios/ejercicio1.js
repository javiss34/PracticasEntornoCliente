"use strict";

export const llenarArray = () => {
    let arrayRelleno = [];
    for (let i = 0; i < 9; i++) {
        let nuevoNumero;
        do{
            nuevoNumero=Math.floor(Math.random()*9+1)
        }while(arrayRelleno.includes(nuevoNumero));
            arrayRelleno=[...arrayRelleno,nuevoNumero]
    }
    return arrayRelleno;
}

export const comprobarArray = (array) => {
    if(Array.isArray && array.length===9){
        for (let i = 0; i < array.length; i++) {
        let numeroActual = array[i];
        for (let j = i+1; j < array.length; j++) {
            if(array[i]===array[j]){
                return `El array introducido tiene números repetidos`;
            }
            
        }
    }
    return `El array introducido no tiene números repetidos`;

    }else{
        return `El array introducido no tiene 9 números o no es un array`;
    }

    
}