"use strict";

export function mostrarMes(entero){
    if(isNaN(entero)){
        console.log("Error. No has introducido un número");
    }
    let mes;
    switch (entero) {
        case 1:
            mes= "Enero";
            break;
        case 2:entero
            mes= "Febrero";
            break;
        case 3:
            mes= "Marzo";
            break;
        case 4:
            mes= "Abril";
            break;
        case 5:
            mes= "Mayo";
            break;
        case 6:
            mes= "Junio";
            break;
        case 7:
            mes= "Julio";
            break;
        case 8:
            mes= "Agosto";
            break;
        case 9:
            mes= "Septiembre";
            break;
        case 10:
            mes= "Octubre";
            break;
        case 11:
            mes= "Noviembre";
            break;
        case 12:
            mes= "Diciembre";
            break;
    
        default:
            console.log("ERROR. Tu número no esta en el rango 1-12")
            break;
    }
    return console.log(`El mes número ${entero} es ${mes}`);

}
