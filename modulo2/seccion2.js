

//! Tipos de datos primitivos

//? Numeros 
let numero = 2 //
console.log(numero); 
//? Cadenas
let nombre = 'juana'
// console.log(nombre); 

console.log(nombre[2]);
nombre[3] = 'l'
console.log(nombre);


//! Tipos de datos compuestos
//? Arreglos

let numeros = [2,3,4,5] 
console.log(numeros[2]);
numeros[3]= '🙌'
console.log(numeros);
//? Objetos
let usuario = {nombre:'Juana', edad:32 }
console.log(usuario);

//! Tipos de Datos : Operador Type Of
let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number

let numero =1
console.log(typeof numero);

let estaApago= true
console.log(typeof 'agga');


let numero2 = -6.3
console.log(typeof numero2);

let a = 1 / 0;

console.log( typeof a); // -> Infinity

let big = 1234567890000000000000n;
console.log(typeof big);

let big3 = 1000n + 20n; 
console.log(big3);

let mensaje1 = "Quiero hacer 'enfasis' en aslguna palabra"
console.log(mensaje1);