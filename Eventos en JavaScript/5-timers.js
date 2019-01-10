'use strict'

//setInterval
//setTimeout


var temporizador = setInterval(function(){
    setColor()
}, 2000)

function setColor(){
    var pagina = document.body
    pagina.style.backgroundColor = pagina.style.backgroundColor == 'blue' ? 'green' : 'blue'
}

function stopChangeColor(){
    clearInterval(temporizador)
}