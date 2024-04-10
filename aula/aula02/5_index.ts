// Crie uma função chamada filtrarNumerosPares que aceita um array de números e retorna um novo array contendo apenas os números pares.


function FiltrarNumerosPares(numeros: number[]): number[] {
    return numeros.filter((numero ) => numero % 2 == 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = FiltrarNumerosPares(numeros);
console.log(numerosPares)