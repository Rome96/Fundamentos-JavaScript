//The Star Wars API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts =  { crossDomain: true }

function obtenerPersonajes(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, (data) => {
            resolve(data)
        })
        .fail( () => reject(id))
    }) 
}


function onErr(id){
    console.log(`sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonajes(2)
    .then((personaje) => {
        console.log(`Él personaje 2 es ${personaje.name}`)
    })
    .catch(onErr)
    /*
    .catch((id) => {
        onErr(id)
    })
    */

