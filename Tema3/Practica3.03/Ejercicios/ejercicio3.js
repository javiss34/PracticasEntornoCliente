"use strict";

export let discente = {
    id: 34,
    nombre: "Javier",
    apellidos: "Sánchez Solera",
    aficiones: ["Futbol","Rugby"],
    notas: {
        primera:7,
        segunda:5,
        tercera: 6
    },
    calcularMedia: function(){
        let {primera,segunda,tercera} = this.notas;
        return (primera+segunda+tercera)/3;
    },
    imprimirAficiones: function(){
        return this.aficiones.join(", ");
    },
    imprimirInforme: function(){
        console.log(`_____INFORME_____`);
        for (const clave in this) {
            if(typeof this[clave] !== "function"){
                if(typeof this[clave] === "object" && !Array.isArray(this[clave])){ //He tenido que validar que no sea un array, sino se metia en objeto.
                    console.log((`${clave}:`));
                    for (const subclave in this[clave]) {
                        console.log((`${subclave}: ${this[clave][subclave]}`));
                    }
                }else if(Array.isArray(this[clave])){
                    console.log(`${clave}: ${this[clave].join(", ")}`);
                }else{
                    console.log((`${clave}: ${this[clave]}`));
                }
            }  
            
        }
        console.log(`Nota media: ${this.calcularMedia().toFixed(2)}`);

    }

}
