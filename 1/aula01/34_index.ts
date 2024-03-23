// Crie uma função chamada imprimirTabuada que aceita um parâmetro numérico e imprime a tabuada desse número de 1 a 10. Use uma estrutura de repetição apropriada para isso.

const imprimirTabuada = (numero: number): void => {
    for(let contador = 1; contador <= 10; contador++) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
    }
}