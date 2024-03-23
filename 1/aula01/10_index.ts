// Declare uma constante ANO_ATUAL com o valor do ano atual. 
// Em seguida, crie uma função que receba um ano como parâmetro e retorne a diferença entre o ano passado como parâmetro e o ANO_ATUAL.

const ANO_ATUAL: number = 2024;

function CalcularAno(RECEBE_ANO: number): number {
    return ANO_ATUAL - RECEBE_ANO
}

CalcularAno(2000)