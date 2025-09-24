"use strict";

export const generarCurso = (nombre,año,desc) => ({
        nombre,
        año,
        desc,
        alumnado: [],
        matricular: function(discente){
            this.alumnado.push(discente);
        }
});


