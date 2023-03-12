
'use strict'

let numeroDia = Number(prompt('Escribe un numero del 1 al 7:')) ;

switch (numeroDia) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Error: Valor introducido incorrecto');
        break;
}

// 4. Crear un programa que pida al usuario un número del 1 al 7 y muestre en
// pantalla el día de la semana correspondiente (1: Lunes, 2: Martes, etc.).