// Crie uma função chamada dobrarNumeros que aceita um array de números e retorna um novo array contendo os números originais dobrados.

function DobrarNumeros(numeros6: number[]): number[] {
    return numeros.filter((numero) => numero * 2)
}

const numeros6 = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosDobrados = DobrarNumeros(numeros6)
console.log(numerosDobrados)