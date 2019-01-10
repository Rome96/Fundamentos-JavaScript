'use strict'

const video = document.querySelector('.bostonVideo')

video.addEventListener('play', function(){
    console.log('El Vídeo se ha Iniciado')
})

video.addEventListener('seeking', function(){
    console.log('Se está buscando en el vídeo', this.currentTime)
})

video.addEventListener('ended', function(){
    console.log('El Vídeo se ha Terminado')
})