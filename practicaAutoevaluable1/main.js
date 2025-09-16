"use strict";

//ejercicio1
/* function calcularaImc(masa,altura){
    return (masa/(altura*altura));
};

let masaMarcos = 80;
let alturaMarcos = 1.90;
let masaJuan = 75;
let alturaJuan = 1.90;

let imcMarcos = calcularaImc(masaMarcos,alturaMarcos);
let imcJuan = calcularaImc(masaJuan,alturaJuan);

let imcMarcosMayorJuan = true;
if(imcMarcos<=imcJuan){
    imcMarcosMayorJuan=false;
}

console.log(imcMarcos);
console.log(imcJuan);
console.log(`Tiene Marcos un IMC mayor que el de Juan : ${imcMarcosMayorJuan}`); */



//ejercicio2
/* function puntMedia(partido1,partido2,partido3){
    return (partido1+partido2+partido3)/3;

};
let puntMediaEquipoJuan = puntMedia(89,120,103);
let puntMediaEquipoMiguel = puntMedia(116,94,123);
let puntMediaEquipoMaria = puntMedia(97,134,105);

function mejorMedia(puntMediaEquipoJuan,puntMediaEquipoMiguel){
    if(puntMediaEquipoJuan>puntMediaEquipoMiguel && puntMediaEquipoJuan>puntMediaEquipoMaria){
        console.log(`El equipo de juan tiene mejor media de puntuación con ${puntMediaEquipoJuan} puntos`);
    }else if(puntMediaEquipoMiguel>puntMediaEquipoJuan && puntMediaEquipoMiguel>puntMediaEquipoMaria){
        console.log(`El equipo de Miguel tiene mejor media de puntuación con ${puntMediaEquipoMiguel} puntos`);
    }else if(puntMediaEquipoJuan==puntMediaEquipoMaria==puntMediaEquipoMiguel){
        console.log(`Empate ${puntMediaEquipoJuan} - ${puntMediaEquipoMiguel} - ${puntMediaEquipoMaria}`);
    }else{
        console.log(`El equipo de María tiene mejor media de puntuación con ${puntMediaEquipoMaria} puntos`)
    }
}

mejorMedia(puntMediaEquipoJuan,puntMediaEquipoMiguel); */



//ejercicio3
/* function funcion(num1,num2){
    for (let i = 0; i < num1; i++) {
        console.log(num2);
        num2*=2;
    }

}
funcion(4,6); */


//ejercicio4
function calcularPrecio(nombre="Producto genérico",precio=100,impuesto=21){
    if(isNaN(precio) || isNaN(impuesto)){
        console.log("Error");
    }else{
        console.log(`Producto: ${nombre} \nPrecio final: ${precio+(precio*(impuesto/100))}€`)
    }

}
calcularPrecio("PS5", "rt", 21);
calcularPrecio("Coche",20000,21);

