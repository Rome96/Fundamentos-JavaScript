var turi = {
    nombre: 'Turiano',
    apellido: 'Romero',
    edad: 22,
    pais: 'Colombia'
}

var isaac = {
    nombre: 'Isaac',
    apellido: 'Ortiz',
    edad: 10,
    pais: 'Colombia'
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(turi)
imprimirNombreEnMayusculas(isaac)
imprimirNombreEnMayusculas({nombre: 'pepito'})