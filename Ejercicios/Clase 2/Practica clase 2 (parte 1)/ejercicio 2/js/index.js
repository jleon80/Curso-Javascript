
'use strict'

let nombre = prompt('Ingresa tu nombre');
console.log(`Tu nombre es: ${nombre}`);

let edad = prompt('Ingresa tu edad');
console.log(`Tu edad es: ${edad}`);

let fanDeportes = confirm('Te gustan los deportes?');
console.log(`Te gustan los deportes: ${fanDeportes}`);

alert(`Muchas gracias ${nombre} por responder nuestras preguntas`);

// 2. Interactuando con el usuario desde la consola
// a. Creá un archivo experimento.html agregá una etiqueta H1 que diga:
// “La magia sucede en la consola!”. Creá un archivo javascript y
// vincularlos.
// b. Dentro del archivo js, mediante un prompt solicitá al usuario que
// ingrese su nombre. Guarda la respuesta en un variable llamada
// “nombre”. Imprimí el nombre del usuario en la consola.
// c. Mediante otro prompt solicitá al usuario que ingrese su edad. Guarda
// la respuesta en una variable llamada “edad”. Imprimí la edad del
// usuario en la consola.
// d. Mediante un confirm preguntale al usuario si le gustan los deportes.
// Guarda la respuesta en un variable llamada “fanDeportes”. Imprimí el
// valor por consola.
// e. Mediante un alert se tendrá que mostrar la leyenda “Muchas gracias
// Nombre por responder nuestras preguntas”. En el mensaje deberá
// figurar el nombre del usuario guardado en la variable “nombre”.