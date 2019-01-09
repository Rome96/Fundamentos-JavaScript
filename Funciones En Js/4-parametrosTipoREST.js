'use strict'

function cocinar (ingrente1, ingrente2, ...masIngredientes ){
    console.log('Ingrediente 1:', ingrente1)
    console.log('Ingrediente 2:', ingrente2)
    console.log('Más Ingredientes:', masIngredientes)
}
cocinar('Tomate', 'Pollo', 'Arroz', 'Cebolla', 'Sal', 'Agua', 'Silantro', 'Ají')

console.log('---------------------------------------------')
//***********************************************************************************+ */


function cocinar2 (...todosIngredientes ){
    console.log('Más Ingredientes:', todosIngredientes)
}
cocinar2('Tomate', 'Pollo', 'Arroz', 'Cebolla', 'Sal', 'Agua', 'Silantro', 'Ají')