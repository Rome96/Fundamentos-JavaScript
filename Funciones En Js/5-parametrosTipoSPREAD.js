'use strict'

function cocinar(ingrediente1, ingrediente2, ingrediente3, ingrediente4){
    console.log('Ingrediente 1:', ingrediente1)
    console.log('Ingrediente 2:', ingrediente2)
    console.log('Ingrediente 3:', ingrediente3)
    console.log('Ingrediente 4:', ingrediente4)

}
var ingredientesBase = ['Pollo', 'Tomate', 'Ají']
cocinar(...ingredientesBase, 'Sal')

console.log('--------------------------------------------------------')
//*** COMBINACIÓN DE PARAMETROS REST Y SPREAD *****/

function ensalada(ingrediente1, ingrediente2, ingrediente3, ...otrosIngredientes){
    console.log('Ingrediente 1:', ingrediente1)
    console.log('Ingrediente 2:', ingrediente2)
    console.log('Ingrediente 3:', ingrediente3)
    console.log('Otros Ingredientes:', otrosIngredientes)
}
var ingredientesBase = ['Tomate', 'Cebolla', 'Ají']
ensalada(...ingredientesBase, 'Pepino', 'Lechuga', 'Champiñones', 'Brocoli')