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

// retorna un nuevo objeto con la persona desglosada. debe ir entre () para retornar
const pasarAlturaACms = persona => ({ //es igual al code que esta comentado abajo
    ...persona,
    altura: persona.altura * 100
})
/*
{
    return {
        ...persona,
        altura: persona.altura * 100 // aqui modificamos realmente la altura
    }
}
*/

var personasEnCms = personas.map(pasarAlturaACms)

console.log(personasEnCms)
console.log(personas)
