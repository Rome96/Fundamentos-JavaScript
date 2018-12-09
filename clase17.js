var turiano = {
    nombre: 'Turiano',
    apellido: 'Romero',
    altura: 1.72
}

var isaac = {
    nombre: 'Isaac',
    apellido: 'Ortiz',
    altura: 1.33
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.72
}

var paula = {
    nombre: 'Paula',
    apellido: 'Martinez',
    altura: 1.63
}

var angela = {
    nombre: 'Angela',
    apellido: 'Ezcorcia',
    altura: 1.60
}

var personas = [turiano, isaac, alan, paula, angela]

console.log(personas)
console.log(personas[1])
console.log(personas[0].altura)

//recorrer el array y decir cuanto mide cada persona

for (var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} Mide ${persona.altura} Metros`)
}