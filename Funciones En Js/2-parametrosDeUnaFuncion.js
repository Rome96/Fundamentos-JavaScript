'use strict'


function Saludar (nombre, edad){
	console.log('Hola', nombre)
	console.log('Edad:', edad)

	var resultado = nombre + ' Tiene ' + edad + ' Años'
	return resultado
}

var mensaje = Saludar('Turiano', 23)

console.log(mensaje)