//The Star Wars API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const personURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts =  { crossDomain: true }

const onResponse = function (obj) {
    console.log(`Hola, yo soy ${obj.name}`)
}
//----

function obtenerPersonajes(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)

}

obtenerPersonajes(2)
obtenerPersonajes(3)
obtenerPersonajes(4)

$.get(personURL, opts, onResponse)
