
'use strict'

let numeroUno = Number(prompt('Escribe el primer numero:')) ;
let numeroDos = Number(prompt('Escribe el segundo numero:')) ;
let numeroTres = Number(prompt('Escribe el tercer numero:')) ;
let respuesta;

if(numeroUno > numeroDos){
    respuesta = numeroUno;
}else {
    respuesta = numeroDos;
} 

if (numeroTres > numeroUno){
    respuesta += numeroTres;
}
else{
    respuesta += numeroUno;
}

// 5. Crear un programa que pida al usuario tres números y muestre en pantalla la
// suma de los dos mayores.

