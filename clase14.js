var turiano = {
    nombre: 'Turiano',
    apellido: 'Romero',
    edad: 22,
    peso: 80
}
// bajar 3 kilos
console.log(`Al inicio del año ${turiano.nombre} pesa ${turiano.peso}kg`)

const VARIACION_DEL_PESO = 0.3 //300 gramos
const DIAS_DEL_ANIO = 365

const AUMENTAR_DE_PESO = persona => persona.peso += VARIACION_DEL_PESO
const DISMINUIR_DE_PESO = persona => persona.peso -= VARIACION_DEL_PESO
const COME_MUCHO = () => Math.random() < 0.3 //30%
const REALIZA_DEPORTE = () => Math.random() < 0.4

const META = turiano.peso -3 
var dias = 0

while (turiano.peso > META) {
    if (COME_MUCHO()){
        AUMENTAR_DE_PESO(turiano)
    }
    if (REALIZA_DEPORTE()) {
        DISMINUIR_DE_PESO(turiano)
    }
    dias += 1
}

//.toFixed(), para tomar lugares despues del punto
console.log(`Pasaron ${dias} días, hasta que ${turiano.nombre} adelgazó 3kg`) 
