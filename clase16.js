var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'aries':
        console.log('Vivirás el final del puente sintiendo una punzada de nostalgia.')
        break;

    case 'tauro':
        console.log('seras feliz')
        break;

    case 'geminis':
    case 'géminis':
        console.log('tendras un nuevo amor')
        break;

    case 'cancer':
    case 'cáncer':
        console.log('tendras dinero este fin de mes')
        break;

    case 'leo':
        console.log('un familiar te visitara')
        break;

    case 'virgo':
        console.log('te ganaras la loteria')
        break;

    case 'libra':
        console.log('tendras una casa')
        break;

    case 'escorpio':
        console.log('viviras un viaje a fin de año')
        break;

    case 'sagitario':
        console.log('tendras un mejor empleo')
        break;

    case 'capricornio':
        console.log('te ganaras un automovil')
        break;

    case 'acuario':
        console.log('conoceras a nuevas personas')
        break;

    case 'piscis':
        console.log('seras multimillonario')
        break
    
    default:
        console.log('No es un  signo zodiacal válido')
        break;
}