const palabra = prompt("Escribe tu palabra")

function polindromo(p){

  let  pa = p.split("").reverse() // .split("") -> convierte al string a un array

    if (pa.join() === p ){ // .join("") -> convierte al array en un string
        alert('palindromo')
    }else{
        alert('no es palindromo')
    } 
}
polindromo(palabra)

