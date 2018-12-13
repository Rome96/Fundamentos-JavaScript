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

obtenerPersonajes(1)
    .then((personaje) => {
        console.log(`Él personaje 1 es ${personaje.name}`)
        return obtenerPersonajes(2)//aqui pedimos el id del personaje y abajo se hace el llamado
    })
    .then((personaje) => {
        console.log(`Él personaje 2 es ${personaje.name}`)
        return obtenerPersonajes(3)
    })
    .then((personaje) => {
        console.log(`Él personaje 3 es ${personaje.name}`)
        return obtenerPersonajes(4) 
    })
    .then((personaje) => {
        console.log(`Él personaje 4 es ${personaje.name}`)
        return obtenerPersonajes(5)
    })
    .then((personaje) => {
        console.log(`Él personaje 5 es ${personaje.name}`)
        return obtenerPersonajes(6)
    })
    .then((personaje) => {
        console.log(`Él personaje 6 es ${personaje.name}`)
        return obtenerPersonajes(7)
    })
    .then((personaje) => {
        console.log(`Él personaje 7 es ${personaje.name}`)
    })
    .catch(onErr)
    /*
    .catch((id) => {
        onErr(id)
    })
    */

