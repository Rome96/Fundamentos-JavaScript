var turiano = {
    nombre: 'Turiano',
    apellido: 'Romero',
    altura: 1.72
}

var jesus = {
    nombre: 'Jesus',
    apellido: 'Guzman',
    altura: 1.82
}

var isaac = {
    nombre: 'Isaac',
    apellido: 'Ortiz',
    altura: 1.33
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.75
}

var paula = {
    nombre: 'Paula',
    apellido: 'Martinez',
    altura: 1.63
}

var angela = {
    nombre: 'Angela',
    apellido: 'Ezcorcia',
    altura: 1.61
}

var personas = [turiano, isaac, alan, paula, angela, jesus]

const esAlta = persona => persona.altura >= 1.7
var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

// RETO: Filtrar personas bajitas

const esBaja = persona => persona.altura <= 1.6
var personasBajas = personas.filter(esBaja)
console.log(personasBajas)