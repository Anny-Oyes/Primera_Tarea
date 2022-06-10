// Calcular el área de un círculo.

function areaCirculo (radio: number, pi: number =3.14) {
    return (pi * (radio * radio));
}

console.log("El área total del círculo es de: " + areaCirculo(5) + " cm²")