// Convertidor de megabytes a gigabytes.

function conversorMb (megabytes: number, valorFijo: number = 1000) {
    return (megabytes / valorFijo);
}
console.log("El resultado es: " + conversorMb(40) + " GB")