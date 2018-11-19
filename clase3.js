var edad = 22   
edad +=1 // incrementar el valor
console.log(edad)

var peso = 80
peso -= 2 // decrementar valor
console.log(peso)

var hamburguesa = 3
// peso = peso + hamburguesa <- esta es una forma tambien 
peso += hamburguesa //Sumar valores
console.log(peso)

var natacion = 5
// peso = peso - natacion 
peso -= natacion // restar valores
console.log(peso)

//DECIMALES

var precioDeArroz = 200.4
// total = precioDeArroz * 100 * 3 / 100 ---->> saca el valor exacto (ojo se esta multiplicando por 3)
total = Math.round(precioDeArroz * 100 * 3) / 100 // otra forma más precisa
console.log(total)
//------------------


var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
console.log(cantidadDePorcionesPorPersona)