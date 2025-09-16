"use strict"

export function multiplosTres(num){
    if(isNaN(num) || num<=0){
        console.log("ERROR")
    }

    for (let i = num; i <= 0; i--) {
        console.log(i);
        i=i-3;
    }
}