var turiano = {
    nombre: 'Turiano',
    apellido: 'Romero',
    edad: 22,
    peso: 80
}

console.log(`Al inicio del año ${turiano.nombre} pesa ${turiano.peso}kg`)

const VARIACION_DEL_PESO = 0.2 //gramos
const DIAS_DEL_ANIO = 365

const AUMENTAR_DE_PESO = persona => persona.peso += VARIACION_DEL_PESO
const DISMINUIR_DE_PESO = persona => persona.peso -= VARIACION_DEL_PESO


for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random() // genera un numero aleatorio

    if (random < 0.25){
        AUMENTAR_DE_PESO(turiano)
    } else if (random < 0.5) {
        DISMINUIR_DE_PESO(turiano)
    }
}
//.toFixed(), para tomar lugares despues del punto
console.log(`Al final del año ${turiano.nombre} pesa ${turiano.peso.toFixed(1)}kg`) 
