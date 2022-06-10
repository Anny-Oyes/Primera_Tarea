// Convertidor de kilómetros a metros.

function conversorKm (kilometros: number, valorFijo: number = 1000) {
    return (kilometros * valorFijo);
}

console.log ("El resultado es: " + conversorKm(2) + " Km")