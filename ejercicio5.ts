// Convertidos de metros a kilómetros.

function conversorMt (metros: number, valorfijo: number = 1000) {
    return (metros / valorfijo);
}
console.log("El resultado es: " + conversorMt(20) + " Km")