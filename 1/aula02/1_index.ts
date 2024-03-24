// Escreva uma função chamada soma que aceita um número indefinido de parâmetros e retorna a soma de todos eles.

function Soma(...numeros:number[]): number {
    return numeros.reduce((total, numero) => total + numero, 0)
}
