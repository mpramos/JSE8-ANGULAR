console.log(2+'masra')
console.log(typeof 2)


let nombre = false ? 'maria':'false'  
console.log(nombre)

console.log(3+'4')




console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8


const x = 5;
const y = 2;

console.log("suma: ", x + y); // -> 7
console.log("resta: ", x - y); // -> 3
console.log("multiplicación: ", x * y); // -> 10
console.log("división: ", x / y); // -> 2.5
console.log("residuo de la división: ", x % y); // -> 1
console.log("potencia: ", x ** y); // -> 25



let str = "123";
let n1 = +str; /*123*/
let n2 = -str; /*-123*/
let n3 = -n2; /*123*/
let n4 = +"abcd"; /*NaN*/

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number



let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19

//! VALORES FALSOS
0,'',false

console.log('sdfsdfsdf' ? 'verdadero':'falso')
//! VALORES VERDADEROS
1,'ndndnd',true



let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!name); // -> true


console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob




let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0



let a = true;
console.log(a); // -> true
a &&= false;

console.log(a); // -> false




let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true








