"use strict";

let cuerpo = document.body;
let letras = cuerpo.textContent.toLowerCase();
let palabras = letras.split(" ");
console.log(palabras[12])

const censurar = () => {
    for (let i = 0; i < palabras.length ; i++) {
        if(palabras[i]==="sexo"){
            palabras.innerHTML = "bloqueado"
        }
        
    }

}

censurar();

