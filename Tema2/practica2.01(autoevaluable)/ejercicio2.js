"use strict";
export function puntMedia(partido1,partido2,partido3){
    if(isNaN(partido1) || isNaN(partido2) || isNaN(partido3)){
        console.log("ERROR")
    }
    return (partido1+partido2+partido3)/3;
};