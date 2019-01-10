var contador = 0

const lluve = () => Math.random() < 0.25

do {
    contador++
} while (!lluve()); // si no llueve, se ejecuta el code de arriba   

//reto
if (contador === 1) {
    console.log(`Fui a ver si llovía ${contador} vez.`)
} else {
    console.log(`Fui a ver si llovía ${contador} veces.`)
}