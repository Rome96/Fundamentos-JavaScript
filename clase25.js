class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn) {
        //var nombre = this.nombre
        //var apellido = this.apellido
        var {nombre, apellido} = this // nombre y apellido lo sacamos de this
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre, apellido, false)
        }
    }
    soyAlto(){
       return this.altura > 1.70
    }
}
var turiano = new Persona('Turiano', 'Romero', 1.72)
var isaac = new Persona('Isaac', 'Ortiz', 1.40)

//-------------------------------------------------------------------//
class Developer extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) // llamando al contructor de la clase padre
    }
    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy developer`);
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}
var pepe = new Developer('pepe', 'Romero', 1.72)

//---------------------------------------------------------------------//
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)

    if (esDev){
        console.log(`Ohh, no sabia que eras developer`)
    }
}
//-------------------------------------------------------------------------//

pepe.saludar(responderSaludo)
turiano.saludar(responderSaludo)
isaac.saludar()
