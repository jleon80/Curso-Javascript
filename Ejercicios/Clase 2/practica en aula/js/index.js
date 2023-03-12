'use strict'


// Crear un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número si es impar mostrar false seguido del número, utilizar el operador ternario.
let numeroAleartorio = Math.floor(Math.random() * (20 - 1));

numeroAleartorio % 2 === 0 ? console.log(`True ${numeroAleartorio}`) : console.log(`False ${numeroAleartorio}`)

// Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario
let numeroUno = parseInt(prompt("Introduce el primer número (del 1 al 10):"));
let numeroDos = parseInt(prompt("Introduce el segundo número (del 1 al 10):"));
let numeroTres = parseInt(prompt("Introduce el tercer número (del 1 al 10):"));

let promedio = (numeroUno + numeroDos + numeroTres) / 3;
console.log(`El promedio es ${promedio}`);

promedio > 5 ? console.log('true') : console.log('false');

// Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos. Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo
let dolaresJuan = Number(prompt('Cuanto dinero tienes Juan?:'));
let dolaresDavid = dolaresJuan / 2;
let dolaresJose = (dolaresJuan + dolaresDavid) / 2;

let resultado = (dolaresJuan + dolaresDavid + dolaresJose) / 3;

console.log(`El promedio de la cantidad de dinero que tienen entre los 3 es: ${Math.floor(resultado)}`);