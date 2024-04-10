// Modifique a função dobrarNumero para que aceite um parâmetro opcional chamado vezes, que determina quantas vezes o número deve ser dobrado. 
// Se nenhum valor for fornecido para vezes, o padrão deve ser 2.

const dobrNumero = (numero1: number, numero2: number, vezes: number = 0): number => (numero1 + numero2) * vezes;

dobrNumero(1, 2, 5)