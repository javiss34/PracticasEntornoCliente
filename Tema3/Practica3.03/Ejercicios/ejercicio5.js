"use strict"

export const mostrarObjeto = (objeto) => {
    console.log(`\n_____Mostrar objeto_____`)
    for (const clave in objeto) {
        if(typeof objeto[clave] !== "function"){
            if(Array.isArray(objeto[clave])){
                console.log(`${clave}: ${objeto[clave]}`);
            } else if(typeof objeto[clave] === "object"){
                console.log(`${clave}:`);
                for (const subclave in objeto[clave]) {
                    console.log(`${subclave}: ${objeto[clave][subclave]}`);
                }
            }else{
                console.log(`${clave}: ${objeto[clave]}`)
            }
        }  
        
    }

}