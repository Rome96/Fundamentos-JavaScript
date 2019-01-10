//The Star Wars API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const personURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts =  { crossDomain: true }

const onResponse = function (obj) {
    console.log(arguments)
    console.log(`Hola, yo soy ${obj.name} y mi genero es ${obj.gender}`)
}
//----
$.get(personURL, opts, onResponse)
