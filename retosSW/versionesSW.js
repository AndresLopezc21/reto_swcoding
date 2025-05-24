function validateVersion(value) {
    const pares = value.split('|');
    const datos = {};
    pares.forEach(par => {
        const [clave, valor] = par.split(':');
        if (clave && valor) {
            datos[clave.trim().toLowerCase()] = valor.trim();
        }
    });

    // Validaciones
    const hasZipcodeOrStatus = 'zipcode' in datos || 'status' in datos;

    if (!datos.name || datos.name.length < 5) return `Version ${hasZipcodeOrStatus ? '4.0' : '3.3'}|Error`;

    const ageNum = Number(datos.age);
    if (!datos.age || isNaN(ageNum) || ageNum < 18) return `Version ${hasZipcodeOrStatus ? '4.0' : '3.3'}|Error`;

    if (!datos.state || datos.state.length < 5) return `Version ${hasZipcodeOrStatus ? '4.0' : '3.3'}|Error`;

    if ('zipcode' in datos && !/^\d{5}$/.test(datos.zipcode)) return `Version 4.0|Error`;

    if ('status' in datos) {
        const statusLower = datos.status.toLowerCase();
        if (statusLower !== 'soltero' && statusLower !== 'casado') return `Version 4.0|Error`;
    }

    return `Version ${hasZipcodeOrStatus ? '4.0' : '3.3'}|Success`;
}

// Pruebas
console.log(validateVersion("name:Andrea|age:29|state:Jalisco|zipcode:44100|status:Soltero"));  // Version 4.0|Success
console.log(validateVersion("name:PedroL|age:22|state:Nayarit"));                               // Version 3.3|Success
console.log(validateVersion("name:Ana|age:19|state:Yucatán"));                                  // Version 3.3 |Error
console.log(validateVersion("name:Roberto|age:17|state:Sonora|status:Soltero"));                // Version 4.0|Error
console.log(validateVersion("name:Elisa|age:30|state:DF|zipcode:99999|status:divorciado"));     // Version 4.0|Error