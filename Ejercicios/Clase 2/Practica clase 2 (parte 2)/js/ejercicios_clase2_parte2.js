'use strict'

// ---------------Ejercicio 1
let abuelos = ["Victor", "Emilia"];
let padres = [];
let hijos = ["Bruno", "Derek"]
let nietos =  [];

// // ii. El array de los padres debe ser creado vacío y luego insertar a
// // los padres.
padres.push('Francisco','Teresa');
console.log(padres);

// // iv. El array de los nietos debe ser creado vació y luego insertar a los
// // nietos.
nietos.push('Hugo', 'Sofia');
console.log(nietos);

let arbolGenealogico = [...abuelos, ...padres, ...hijos, ...nietos];
console.log(arbolGenealogico);

// // v. Se debe imprimir en consola la cantidad de abuelos, padres, hijos y nietos.
console.log(`La cantidad de miembros de la familia son ${arbolGenealogico.length}`);

// ------------------Ejercicio 2
// 2. Crear un programa que pida al usuario un array de palabras y muestre en
// consola la primera palabra.

let arrayPalabras = prompt('Escribe varias palabras separadas por comas ","');
arrayPalabras = arrayPalabras.split(',');

console.log(`Esta es la primera palabra del array :  ${arrayPalabras[0]}`);


// ------------------Ejercicio 3

// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
// determinar si un color introducido por el usuario a través de un prompt se
// encuentra dentro del array o no.

let arrayColors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let userColor = prompt('Escribe tu color favorito de la siguiente lista: azul, amarillo, rojo, verde, café, rosa');

let selectedColor = arrayColors.find(color => color === userColor.toLocaleLowerCase());
console.log(selectedColor? 'Color encontrado en el array':'Color NO encontrado en el array');

// ------------------Ejercicio 4
// 4. Crear un programa que pida al usuario 5 números y los guarde en un array.
// Luego, mostrar en consola el array completo y la suma de los números.

let arrayNumeros = [];

arrayNumeros.push(Number(prompt('Escribe primer numero')));
arrayNumeros.push(Number(prompt('Escribe segundo numero')));
arrayNumeros.push(Number(prompt('Escribe tercer numero')));
arrayNumeros.push(Number(prompt('Escribe cuarto numero')));
arrayNumeros.push(Number(prompt('Escribe quinto numero')));

let total = 0;

console.log(`Contenido del array : ${arrayNumeros}`);

arrayNumeros.forEach(function(numero) {
    total += numero;
});
console.log(`Resultado suma elementos array : ${total}`);


// ------------------Ejercicio 5
// 5. Genera un array de números aleatorios, ordenarlos de ascendente y
// mostrarlo por consola.

let arrayAleatorio = [ 5, 8, 1, 10, 25, 30, 24];
// funcion para pasar como parametro para ordenar ascendente 
function compareNumbers(a, b) {
    return a - b;
  }

console.log(`Array SIN ordenar ${arrayAleatorio}`);
console.log(`Array ordenado ${arrayAleatorio.sort(compareNumbers)}`);


// ------------------Ejercicio 6
// 6. Crear un programa que pida al usuario un array de números y muestre en
// consola los números impares.

let arrayNumeros = [];

arrayNumeros.push(Number(prompt('Escribe primer numero')));
arrayNumeros.push(Number(prompt('Escribe segundo numero')));
arrayNumeros.push(Number(prompt('Escribe tercer numero')));
arrayNumeros.push(Number(prompt('Escribe cuarto numero')));
arrayNumeros.push(Number(prompt('Escribe quinto numero')));


arrayNumeros.forEach(function (numero) {
    if (numero % 2 !== 0) console.log(numero);
});


// ------------------Ejercicio 7
// 7. Crear un programa que pida al usuario un array de palabras y muestre en
//     consola solamente las palabras que contengan la letra "a".

let arrayPalabras = prompt('Escribe palabras separadas por comas ","');
arrayPalabras = arrayPalabras.split(',');


arrayPalabras.forEach(palabra => {
    if( palabra.indexOf('a') !== -1) console.log(`Esta palabra contiene "a" ${palabra}`);
});


// ------------------Ejercicio 8
// 8. Crear dos arrays, cada uno con 5 números diferentes, generar un nuevo array
// con la combinación de ambos arrays. (Ejemplo: [1,2,3] + [1,2,4] = [1,1,2,2,3,4])

let arrayUno = [1, 2, 3, 4, 5];
let arrayDos = [5, 4, 3, 2, 1];
let arrayCombinacion = [...arrayUno, ...arrayDos];

console.log(`Array resultante : [${arrayCombinacion.sort()}]`);


// ------------------Ejercicio 9
// 9. Crear un programa que pida al usuario un array de palabras y muestre en
// consola un nuevo array que contenga las palabras ordenadas
// alfabéticamente.

let arrayPalabras = prompt('Escribe varias palabras separadas por comas ","');
arrayPalabras = arrayPalabras.split(',');

console.log(`Palabras ordenadas : ${arrayPalabras.sort()}`);

