// Crie uma função chamada lerNumero que use um loop do while para solicitar que o usuário insira um número entre 1 e 10 até que o número inserido esteja dentro desse intervalo.

const lerNumero = (): void => {
    let numero: number;
    do {
        numero = parseInt(prompt("Digite um número entre 1 e 10:"));
    } while (numero < 1 || numero > 10);
};