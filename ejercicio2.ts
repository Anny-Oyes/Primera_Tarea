// Convertidor de grados farenheit a celcius.

function conversor_Celcius (farenheit: number, valorFijo: number = 32, fijo: number = 1.8) {
    return (farenheit - valorFijo) / fijo;
}

console.log("El resulado es: " + conversor_Celcius(60) + " °C")