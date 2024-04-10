// Crie uma função chamada todosSaoPares que verifica se todos os números em um array são pares.
function TodosSaoPares(numeros:number[]): boolean {
    return numeros.every((numero) => numero % 2 == 0);
}

const numeros1 = [2, 4, 6, 8, 10];
console.log(TodosSaoPares(numeros1)); // Saída: true

const numeros2 = [1, 2, 3, 4, 5];
console.log(TodosSaoPares(numeros2)); // Saída: false

