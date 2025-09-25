"use strict";

export const generarCurso = (nombre,anio,desc) => ({
        nombre,
        anio,
        desc,
        alumnado: [],
        matricular: function(discente){
            if(this.alumnado.includes(discente)){
                console.log(`El discente ${discente.nombre} ya está matriculado.`)
            }else{
                this.alumnado.push(discente);
            }
        }
});


