var jesus = {
    nombre: 'Jesus',
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

imprimirNombreEnMayusculas(jesus)
imprimirNombreEnMayusculas(isaac)
imprimirNombreEnMayusculas({nombre: 'pepito'})


//-----------
function cumpleanios(persona){
    return{
        ...persona,
         edad: persona.edad +1
    }
}
cumpleanios(jesus)