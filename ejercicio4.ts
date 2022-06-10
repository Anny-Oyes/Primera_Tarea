// Convertidor de gigabytes a megabytes.

function conversorGb (gigabytes: number, valorFijo: number = 1024) {
    let megabytes: number = (gigabytes * valorFijo);
    return megabytes;
}
console.log ("El resultado es: " + conversorGb(6) + " MB")