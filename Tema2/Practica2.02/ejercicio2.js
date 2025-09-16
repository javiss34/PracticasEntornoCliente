"use strict"
export function comprobarNumero(num){
    if(isNaN(num)){
        console.log("No has introducido un número");
    }
    //Para ver si es par
    let esPar;
    if(num%2==0){
        esPar="es par";
    }else{
        esPar="es impar";
    }
    //Para ver si es positivo
    let esPositivo;
    if(num>0){
        esPositivo="es positivo";
    }else if(num<0){
        esPositivo="es negativo"
    }else{
        esPositivo="es el 0"
    }
    return console.log(`El número ${num} ${esPar} y ${esPositivo}`);
}