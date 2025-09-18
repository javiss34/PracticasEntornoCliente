"use strict"

export function multiplosTres(num){
    if(!Number.isInteger(num) || num<=0){
        console.log("ERROR. No has introducido un número entero positivo");
        return;
    }

    //Si introduce 1 o 2 pongo un mensaje
    if(num===1 || num===2){
        console.log(`El número ${num} no tiene multiplos de 3`);
    }

    for (let i = 1; i <= num ; i++) {
        if(i%3===0){
            console.log(i);
        }

    }

    
}