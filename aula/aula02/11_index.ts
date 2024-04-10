// Escreva uma função chamada encontrarElemento que recebe um array e um valor como entrada e retorna o primeiro elemento do array que corresponde ao valor especificado.
function EncontrarElemento<T>(array:T[], valor: T): T | undefined {
    return array.find((elemento) => elemento == valor);
}

const numeros11: number[] = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
console.log(EncontrarElemento(numeros11, 3))