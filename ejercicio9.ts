// Calcular el área de un triángulo rectángulo.

function areaDeTriangulo (base: number, altura: number, valorFijo: number = 2) {
    let area: number = (base * altura) / valorFijo;
    return area;
}

console.log("El área del triángulo es de: " + areaDeTriangulo(9, 6) + " cm²")