"use strict";

export const informeCurso = (curso) => {
    for(let clave in curso){
            if(typeof curso[clave] !== "function"){
                if(Array.isArray(curso[clave])){
                    console.log(`${clave}: ${curso[clave].join(", ")}`);
                }else if(typeof curso[clave] === "object") {
                    
                }
                    else{
                console.log(`${clave}: ${curso[clave]}`);
                }
            }
    }
}