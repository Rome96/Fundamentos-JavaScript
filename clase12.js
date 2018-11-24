var jesus = {
    nombre: 'jesus',
    apellido: 'guzman',
    edad: 22
}

const MAYOR_DE_EDAD = 18
//---------------------------------------------

const esMayorDeEdad = ({edad}) => edad >= MAYOR_DE_EDAD //  true // arrow function


function imprimirSiEsMayorDeEdad (person){

    if (esMayorDeEdad(person)) {
        console.log(`${person.nombre} es Mayor de Edad`)
    } else {
        console.log(`${person.nombre} es Menor de Edad`)
    }
}
imprimirSiEsMayorDeEdad(jesus)

function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)) { // ! --> sino
        console.log('Acceso Denegado')
    } else {
        console.log('Acceso Concedido')
    }
}

permitirAcceso(jesus)