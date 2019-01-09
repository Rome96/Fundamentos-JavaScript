'use strict'


function calcular (num1, num2, sumarCB, restarCB){
    var suma = num1 + num2
    var resta = num1 - num2

    sumarCB(suma)
    restarCB(resta)
}

calcular(8, 5, function(resultado){
    console.log('Suma:', resultado)
}, function(resultado){
    console.log('Resta:', resultado)
})