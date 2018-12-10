var turiano = {
    nombre: 'Turiano',
    apellido: 'Romero',
    altura: 1.72,
    cantidadDeLibros: 111
}

var jesus = {
    nombre: 'Jesus',
    apellido: 'Guzman',
    altura: 1.82,
    cantidadDeLibros: 120
}

var isaac = {
    nombre: 'Isaac',
    apellido: 'Ortiz',
    altura: 1.33,
    cantidadDeLibros: 123
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.75,
    cantidadDeLibros: 100
}

var paula = {
    nombre: 'Paula',
    apellido: 'Martinez',
    altura: 1.63,
    cantidadDeLibros: 87
}

var angela = {
    nombre: 'Angela',
    apellido: 'Ezcorcia',
    altura: 1.61,
    cantidadDeLibros: 125
}

var personas = [turiano, isaac, alan, paula, angela, jesus]

//****/TENER LA CANTIDAD TOTAL DE LIBROS****//

/*  OPCION # 1
var acum = 0
for (var i = 0; i < personas.length; i++) {
  acum = acum + personas[i].cantidadDeLibros
}
console.log(`en total hay ${acum} libros`) */

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0) //recibe el nombre de la funcion y el valor inicial del acumulador

console.log(`en total hay ${totalDeLibros} libros`)