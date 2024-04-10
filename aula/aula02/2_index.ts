// Crie dois arrays de números. Use o operador spread para criar um terceiro array que combine os elementos dos dois primeiros arrays.

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const array3: number[] = [...array1, ...array2]

console.log(array3)
