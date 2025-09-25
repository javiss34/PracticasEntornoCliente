"use strict";

export const informeCurso = (curso) => {
    console.log(`\n_____Informe del curso_____`)
    for (const clave in curso) {
        if(typeof curso[clave] !== "function"){
            if(Array.isArray(curso[clave])){
                console.log(`${clave}: ${curso[clave].join(", ")}`);
            }else{
                console.log(`${clave}: ${curso[clave]}`);
            }
        }
        
    }
}