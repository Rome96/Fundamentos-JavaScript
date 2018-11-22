var turiano = {
    nombre: 'Turiano',
    apellido: 'Romero',
    edad: 22,
    tecnologo: true,
    nadador: false,
    cantante: false,
    programador: true,
    guitarrista: false
}

function imprimirProfesion (persona){
    console.log(`${persona.nombre} es:`)

    if (persona.tecnologo === true) { // el codigo de abajo es literalmente igual a este
        console.log('Tecnologo')
    } else {
        console.log('No es Tecnologo')
    }
//----------------------------------------
    if (persona.nadador) {
        console.log('Nadador')
    } else {
        console.log('No es nadador')
    }
//------------------------------------
    if (persona.cantante) {
        console.log('Cantante')
    } else {
        console.log('No es Cantante')
    }
//-----------------------------------------
    if (persona.programador) {
        console.log('Programador')
    } else {
        console.log('No es Programador')
    }
//----------------------------------------
    if (persona.guitarrista) {
        console.log('Guitarrista')
    } else {
        console.log('No es Guitarrista')
    }
}
imprimirProfesion(turiano)


//**** RETO DE LA CLASE *******///

//Imprimir si una persona es mayor de edad o no

function imprimirSiEsMayorDeEdad (person){

    if (person.edad >= 18) {
        console.log(`${person.nombre} es Mayor de Edad`)
    } else {
        console.log(`${person.nombre} es Menor de Edad`)
    }
}

imprimirSiEsMayorDeEdad(turiano)

//***** Fin del Reto ******//