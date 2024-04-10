// constCrie uma função chamada maiorNumero que aceita dois parâmetros numéricos e retorna o maior deles.
// Se os números forem iguais, a função deve retornar "Os números são iguais".

const maiorNumero = (numero1: number, numero2: number): number | string => {
    if (numero1 == numero2) {
        return "Os números são iguais"
    }
    else {
        return Math.max(numero1, numero2)
    }
};