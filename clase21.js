// definir un prototipo de usa persona que salude, de su nombre y apellido
var turiano = new Persona('Turiano', 'Romero')
var isaac = new Persona('Isaac', 'Ortiz')

function Persona (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

turiano.saludar()
isaac.saludar()