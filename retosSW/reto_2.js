function sumarNumeros(a, b) {
    function paramValidator(param, number) {
        if (param == null) return `${number} no es un número`;
        if (typeof param !== 'number') return `${number} es ${typeof param}`;
        if (isNaN(param)) return `${number} no es un número válido`;
        if (!Number.isInteger(param)) return `${number} es un número decimal`;
        return null; // válido
    }

    const errorA = paramValidator(a, 'a');
    const errorB = paramValidator(b, 'b');

    if (errorA || errorB) {
        let eOption = errorA ? errorA : errorB;
        return `Ambos parámetros deben ser números enteros.\t${eOption}`;
    }

    const result = a + b;
    return `El resultado de la suma es: ${result} SW`;
}

// Pruebas
console.log(sumarNumeros(5, 2));       // sum
//console.log(sumarNumeros(5, 2.2));       // decimal
//console.log(sumarNumeros("10", 5));      // string
//console.log(sumarNumeros(8, null));      // null
//console.log(sumarNumeros(true, 3));      // boolean
//console.log(sumarNumeros([], {}));       // array, b object (a falla primero)