var jesus = {
    nombre: 'jesus',
    apellido: 'guzman',
    edad: 16
}

const MAYOR_DE_EDAD = 18
//---------------------------------------------

function esMayorDeEdad(persona){
    return persona.edad >= MAYOR_DE_EDAD //  true
}


function imprimirSiEsMayorDeEdad (person){

    if (esMayorDeEdad(person)) {
        console.log(`${person.nombre} es Mayor de Edad`)
    } else {
        console.log(`${person.nombre} es Menor de Edad`)
    }
}

imprimirSiEsMayorDeEdad(jesus)