// Crie uma função chamada algumEPar que verifica se pelo menos um dos números em um array é par.

function AlgumPar(numeros:number[]): boolean {
    return numeros.some((numero) => numero % 2 == 0);
}

const numeros1 = [1, 3, 5, 7, 8];
console.log(AlgumPar(numeros1)); // Saída: true

const numeros2 = [1, 3, 5, 7, 9];
console.log(AlgumPar(numeros2)); // Saída: false