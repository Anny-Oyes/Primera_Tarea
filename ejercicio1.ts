// Convertidor de grados celsius a farenheit.

function convertidor (celsius: number, valorFijo: number = 1.8, fijo: number = 32) {
    return (celsius * valorFijo) + fijo;
}

console.log("El resulado de la conversión es: " + convertidor(60) + " °F")