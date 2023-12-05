// Tareas
// Objetos
// Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

let boleto ={
    from: 'TRAREA1',
    to: 'TRAREA2',
    price: 300
}
console.log(boleto.from);
console.log(boleto.to);
console.log(boleto.price);

// estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana en tu área)
// estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
// el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar por este boleto)
// El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente.
// Luego muestra los valores de todos los campos del ticket en la consola.

// Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos firstName y lastName al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola.
let person = {
    firstName : 'Ana',
    lastName :  'Gonzales'
}
console.log(person.firstName)
console.log(person.lastName)
// Arreglos
// Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. Almacenaremos tres datos de cada libro:
// el título, el autor y el número de páginas:

// Speaking JavaScript, Axel Rauschmayer, 460.
// Programming JavaScript Applications, Eric Elliott, 254.
// Understanding ECMAScript 6, Nicholas C. Zakas, 352.
// Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor, páginas.
// Hemos agregado un nuevo libro a nuestra colección: Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas. Usa el método apropiado para adjuntar el libro al final del arreglo. Muestra la longitud del arreglo y, a su vez, todos los nombres de los libros en la colección.
// Utiliza el comando slice para copiar los dos últimos libros al nuevo arreglo.
// El primer libro de la colección se pierde en circunstancias inexplicables. Ya has aceptado la pérdida, así que ahora elimínalo del arreglo. ¿Cuál método usarás para este propósito? Muestra la longitud del arreglo y todos los nombres de los libros de la colección a su vez.
// Muestra la suma de las páginas de todos los libros de la colección.


let libros = [
    {
        titulo: 'Speaking JavaScript',
        autor:'Axel Rauschmayer',
        numeroPaginas: 460
    },
    {
        titulo: 'Programming JavaScript Applications',
        autor:'Eric Elliott',
        numeroPaginas: 254
    },
]

libros.push({
    titulo: 'Learning JavaScript Design Patterns',
        autor:'Addy Osmani',
        numeroPaginas: 254
})

let suma=0
for (let libro of libros) {
    suma = suma + libro.numeroPaginas 
}
console.log(suma);


let copiaUltimosLibros = libros.slice(-2)
console.log(copiaUltimosLibros);
console.log('libros ', libros)


let libroPerdido = libros.shift()
console.log('libroPerdido ', libroPerdido);
console.log('longitud' , libros.length);
console.log('libros ',libros);


