'use strict'


//ejercicio 1
let edad;
let peso;

console.log(`Resultado Ejercicio 1 - Edad ${edad}, Peso ${peso}`)


// ejercicio 2 
edad = 42;
peso = 80;

console.log(`Resultado Ejercicio 2 - Edad ${edad}, Peso ${peso}`)

// ejercicio 3 

let saludo = "Hola mundo";

console.log(saludo);


// ejercicio 4 

let numeroA = 30;
let numeroB = 45;

let intermedia = numeroA;

numeroA = 45;
numeroB = intermedia;

console.log(`El valor de numeroA es ${numeroA} , el valor de numeroB es ${numeroB}`);

//ejercicio 5

let meGustaElHelado = true;

console.log(meGustaElHelado);

// ejercicio 6 
// 1 
let suma = 5 + 10;
console.log(`El resultado de la suma es ${suma}`);
// 2 
let resta = 20 - 5;
console.log(`El resultado de la resta es ${resta}`);

// 3 
let numeroUno = 5;
let numeroDos = 7;
let resultado = numeroUno * numeroDos;
console.log(`El resultado de la multiplicacion es ${resultado}`);
// 4 
let comparacion = 2 > 1;
console.log(`Resultado de comparacion es ${comparacion}`);
// 5 
let comparacionDos = 1 > 1;
console.log(`Resultado de comparacion es ${comparacionDos}`);

// ejercicio 7
let edadUsuario = prompt("Introduce tu edad:")
alert("Gracias por tu respuesta");
console.log(`Edad del usuario ${edadUsuario}`)
document.getElementById('resultados').innerHTML = `Tu edad es: ${edadUsuario}`;

// ejericico 8 

const euros = 7;
let resultadoConversion = euros * 2;
console.log(`Conversion: ${euros} euros son ${resultadoConversion} dolares`)

// ejercicico 9 
const precio = 100;
const resultadoConIva = precio + precio * 0.21;

console.log(`El precio con IVA es: ${resultadoConIva}`);

// ejercicio 10 
const nombre = 'Juan';
const material = 'Madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza extraña, indómita';

console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}.`);

// ejercicio 11

let numUno = 23
let numDos = 15
let numTres = 3
let numCuatro = 2
let numcinco = 10
let resultados =  23 + ( 15 * (3 / 2)) - 10;

console.log(`El resultado es ${resultado}`);
console.log(`Resultado  - 5 es =  ${resultado -= 5}`);
console.log(`Resultado  - 5 es =  ${--resultado}`);

// ejercicio 12
let enero = 1;
let febrero = 2;
let marzo = 3;
let abril = 4;
let mayo = 5;
let junio = 6;
let julio = 7;
let agosto = 8;
let septiembre = 9;
let octubre = 10;
let noviembre = 11;
let diciembre = 12;

console.log(`Enero es > que diciembre ? ${enero > diciembre}`);
console.log(`Junio es < que julio ? ${junio < julio}`);



