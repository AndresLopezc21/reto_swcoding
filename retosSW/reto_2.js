function sumarNumeros(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        const resultado = a + b;
        return `El resultado de la suma es: ${resultado} SW`;
    } else {
        return "Ambos parámetros deben ser números enteros.";
    }
}

// Pruebas
console.log(sumarNumeros("10", 5));