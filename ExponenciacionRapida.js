function exponentiationRapida(base, exponente) {
    
    if (exponente === 0) {
        return 1;
    }
    if (exponente === 1) {
        return base;
    }

    const mitadExponente = Math.floor(exponente / 2);
    const resultadoMitad = exponentiationRapida(base, mitadExponente);

    if (exponente % 2 === 0) {
        return resultadoMitad * resultadoMitad;
    } else {
        return resultadoMitad * resultadoMitad * base;
    }
}

const base = 2;
const exponente = 5;

const resultado = exponentiationRapida(base, exponente);

console.log(`Resultado de ${base}^${exponente} es ${resultado}`);
