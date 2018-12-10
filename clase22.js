// definir un prototipo de usa persona que salude, de su nombre y apellido
var turiano = new Persona('Turiano', 'Romero', 1.72)
var isaac = new Persona('Isaac', 'Ortiz', 1.40)

function Persona (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    this.altura > 1.70
}


turiano.soyAlto()
isaac.soyAlto()

turiano.saludar()
isaac.saludar()
