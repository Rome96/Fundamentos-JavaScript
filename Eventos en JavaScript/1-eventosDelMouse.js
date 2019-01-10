'use strict'

const boton = document.querySelector('.boton')

boton.addEventListener('click', function(){
    console.log('El botón se ha pulsado')
})

boton.addEventListener('mouseover', function(){
    console.log('El Mouse Está Sobre El Botón')
})

boton.addEventListener('mouseout', function(){
    console.log('El Mouse Está fuera El Botón')
})