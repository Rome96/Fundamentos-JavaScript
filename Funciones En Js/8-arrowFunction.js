'use strict'

var saludar = nombre => 'Hola ' + nombre
console.log(saludar('turi'))
//-------------------------------------------------

var sumar = num => num + 10
console.log(sumar(10))
//-------------------------------------------------

var calcurar = (num1, num2) => num1 * num2
console.log(calcurar(2, 4))
//-------------------------------------------------

var generar = (num1, num2) => {
    var num3 = 5
    return  num1 + num2 + num3
}
console.log(generar(2, 4))
//------------------------------------------------------

var validar = () => {
    return 'Validación correcta'
}
console.log(validar())