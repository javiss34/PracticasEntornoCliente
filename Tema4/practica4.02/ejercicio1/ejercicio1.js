"use strict";

let contenidoDocumento = document.body.innerHTML; //Obtengo el contenido del documento con las etiquetas.
let palabrasDocumento = contenidoDocumento.split(" "); //junto las letras para que sean palabras.

const censurar = () => {
    for (let i = 0; i < palabrasDocumento.length; i++) {
        if(palabrasDocumento[i].toLowerCase().includes("sexo")){//Convierto la palabra en minúsculas y compruebo si contiene "sexo".
            console.log(palabrasDocumento[i]);
            palabrasDocumento[i]='<span class="censurado">CONTENIDO BLOQUEADO</span>';//Sustituyo sexo por contenido bloqueado
        }
    }

    document.body.innerHTML = palabrasDocumento.join(" ");//Uno todas las palabras en una sola cadena.
}


setTimeout(() => {censurar()},2000)