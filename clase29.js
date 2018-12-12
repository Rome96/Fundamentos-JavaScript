//The Star Wars API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts =  { crossDomain: true }

function obtenerPersonajes(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, callback)
     .fail( () => {
        console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonajes(1, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonajes(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonajes(3, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonajes(4, function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonajes(5, function(personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonajes(6, function(personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonajes(7, function(personaje){
                            console.log(`Hola, yo soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})
