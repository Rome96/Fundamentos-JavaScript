var turiano = new Persona('Turiano', 'Romero', 1.72)
var isaac = new Persona('Isaac', 'Ortiz', 1.40)


function HeredaDe (prototipoHijo, prototipopadre){
    var fn = function (){} //funcion vacia
    fn.prototype = prototipopadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}



function Persona (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

function Developer (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

HeredaDe(Developer, Persona) //se llama a la case hija, luego al padre

Developer.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy developer`)
}



turiano.saludar()
isaac.saludar()
