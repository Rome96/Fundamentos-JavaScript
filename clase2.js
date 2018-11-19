var name = 'Turiano'
var lastName = 'ROMERO'


var nombreEnMayusculas = name.toUpperCase()
var apellidoEnMinusculas = lastName.toLowerCase()
var primeraLetraDelNombre = name.charAt(0)
var cantidadDeLetrasDelNombre = name.length
var nombreCompleto = `${name} ${lastName.toLowerCase()}` //Interpolación de variables
var obtenerPartesDeUnStr = name.substr(0, 4)
var ultimaLetraDelNombre = name.substr(-1)


console.log(nombreEnMayusculas)
console.log(apellidoEnMinusculas)
console.log(primeraLetraDelNombre)
console.log(cantidadDeLetrasDelNombre)
console.log(nombreCompleto)
console.log(obtenerPartesDeUnStr)
console.log(ultimaLetraDelNombre)