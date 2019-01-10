//The Star Wars API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts =  { crossDomain: true }

function obtenerPersonajes(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if(callback){
            callback()
        }
    })
}

obtenerPersonajes(1, function(){
    obtenerPersonajes(2, function(){
        obtenerPersonajes(3, function(){
            obtenerPersonajes(4, function(){
                obtenerPersonajes(5, function(){
                    obtenerPersonajes(6, function(){
                        obtenerPersonajes(7)
                    })
                })
            })
        })
    })
})
