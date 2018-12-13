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

var ids = [1, 2, 3, 4, 5, 6, 7]
/*  
var promesas = ids.map(function(id){
    return obtenerPersonajes(id)
})
*/
var promesas = ids.map( (id) => obtenerPersonajes(id) )

Promise
    .all(promesas)
    .then((personajes) => console.log(personajes))
    .catch(onErr)