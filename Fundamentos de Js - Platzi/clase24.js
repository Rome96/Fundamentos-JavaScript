class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto(){
       return this.altura > 1.70
    }
}

var turiano = new Persona('Turiano', 'Romero', 1.72)
var isaac = new Persona('Isaac', 'Ortiz', 1.40)


class Developer extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) // llamando al contructor de la clase padre
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy developer`);
    }
}

var pepe = new Developer('pepe', 'Romero', 1.72)
pepe.saludar()

turiano.saludar()
isaac.saludar()
