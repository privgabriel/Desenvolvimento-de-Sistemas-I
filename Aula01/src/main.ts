//Declare uma variável idade do tipo number e atribua a ela a idade de uma pessoa.
let exercicioUmIdade: number = 0;
exercicioUmIdade = 20;
console.log(exercicioUmIdade)

//Declare uma variável diaDaSemana do tipo string e atribua a ela um dos seguintes valores literais: "segunda", "terça", "quarta", "quinta", "sexta", "sábado" ou "domingo".
let diaDaSemana: string = "Segunda";
console.log(diaDaSemana)

//Declare uma variável nota do tipo number e atribua a ela uma nota de 0 a 10. Utilize literal types para garantir que a nota esteja dentro desse intervalo.
let exercicioTresNota: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
exercicioTresNota = 7;
console.log(exercicioTresNota)

//Declare uma variável genero do tipo string e atribua a ela um dos seguintes valores literais: "masculino", "feminino" ou "não binário".

let exercicioQuatroGenero: string = "Masculino";
console.log(exercicioQuatroGenero)

//Declare uma variável idade e atribua a ela a idade de uma pessoa. Em seguida, atribua um novo valor à variável representando uma idade diferente.
let exercicioCincoIdade: number = 22;
console.log('Idade Padrão ', exercicioCincoIdade)
exercicioCincoIdade = 39;
console.log('Nova idade ', exercicioCincoIdade)

//Declare uma constante PI e atribua a ela o valor de π (aproximadamente 3.14159). Em seguida, tente atribuir um novo valor à constante e veja o que acontece.
const PI: number = 3.14159;

//Declare uma variável nome do tipo string e atribua a ela o seu nome. Em seguida, declare uma variável idade do tipo number e atribua a ela a sua idade.

let exercicioSeteNome: string = "Gabriel Santos";
console.log(exercicioSeteNome)
let exercicioSeteIdade: number = 22;
console .log(exercicioSeteIdade)

//Declare uma variável mensagem dentro de uma função e tente acessá-la fora da função. Em seguida, declare uma variável outraMensagem fora da função e tente acessá-la dentro da função.

let exercicioOitoMensagem: string;
exercicioOitoMensagem = "FORA DA FUNÇÃO"


function ExercicioOitoMensagem(VariavelMensagem: string) {
    console.log(exercicioOitoMensagem)
    return VariavelMensagem
}

console.log(ExercicioOitoMensagem("DENTRO DA FUNÇÃO"))

//Declare uma variável cidade sem atribuir um valor a ela. Em seguida, atribua o nome de uma cidade à variável.
let variavelCidade: string;
variavelCidade = "Santa Maria"
console.log(variavelCidade)

//Declare uma constante ANO_ATUAL com o valor do ano atual. Em seguida, crie uma função que receba um ano como parâmetro e retorne a diferença entre o ano passado como parâmetro e o ANO_ATUAL.
const ANO_ATUAL: number = 2024;
function CalculaAno(NOVO_ANO: number) {
    return ANO_ATUAL - NOVO_ANO
}
console.log(CalculaAno(2000))

//Declare um array chamado numeros que contenha os números de 1 a 5.
let numerosArray: number[] = [1,2,3,4,5]

//Utilizando o array numeros do exercício anterior, imprima o terceiro elemento do array.
console.log(numerosArray[2])

//Utilizando o array numeros, modifique o valor do segundo elemento para 10 e, em seguida, imprima o array modificado.
numerosArray[1] = 10;
console.log(numerosArray)

//Declare um novo array chamado cores que contenha as strings "vermelho", "verde" e "azul". Adicione a cor "amarelo" ao final do array e imprima o array resultante.
let arrayCores: string[] = ["Vermelho", "Verde", "Azul"]
arrayCores.push("Amarelo")
console.log(arrayCores)

//Utilizando o array cores, remova o último elemento do array e imprima o array resultante.
arrayCores.pop()
console.log(arrayCores)

//Utilizando o array numeros, itere sobre cada elemento do array e imprima o elemento multiplicado por 2.
for (let i = 0; i < numerosArray.length; i++){
    console.log(numerosArray[i] * 2)
}

//Utilizando o array cores, utilize o método forEach para imprimir cada cor do array.
arrayCores.forEach(arrayCores => console.log(arrayCores))

//Declare um objeto pessoa com as propriedades nome e idade. Em seguida, use a desestruturação para extrair essas propriedades e atribuí-las a variáveis separadas chamadas nome e idade.

const pessoas = {
    nome: "João",
    idade: 23
};

const {nome, idade} = pessoas
console.log(nome)
console.log(idade)
console.log(pessoas.nome)
console.log(pessoas.idade)

//Declare variáveis nome e idade e atribua valores a elas. Em seguida, use template literals para criar uma mensagem que diga "Olá, [nome]! Você tem [idade] anos."
let exercicioNome: string = "Gabriel Santos";
let exercicioIdade: number = 22;
console.log(`Meu nome é ${exercicioNome}, minha idade é ${exercicioIdade} anos de idade.`)

//Declare uma arrow function chamada dobrar que aceita um número como parâmetro e retorna o dobro desse número.
const dobrar = (exercicioIdade: number): number => {
    return exercicioIdade * 2
}

let exercicioVinte: number = 2;
console.log(dobrar(exercicioVinte))


//Crie um array de objetos, onde cada objeto representa uma pessoa e tem as propriedades nome e idade. Em seguida, use uma arrow function para percorrer esse array e imprimir uma mensagem de saudação para cada pessoa, utilizando template literals e desestruturação para extrair os dados de cada objeto.
const exercicioVinteUm = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Carol", idade: 35 }
];

exercicioVinteUm.forEach((exercicioVinteUm) =>{
    const { nome, idade } = exercicioVinteUm;
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
});

//Crie uma função chamada filtrarPares que aceita um array de números como parâmetro e retorna um novo array contendo apenas os números pares. Use arrow functions e métodos de array para realizar essa operação.

function FiltrarPares(numerosArray: number[]): number[] {
    return numerosArray.filter(numero => numero % 2 == 0);
};
const numerosAleatorios: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = FiltrarPares(numerosAleatorios);
console.log(numerosPares)

//Crie uma função chamada dobrarNumero que aceita um parâmetro numérico e retorna o dobro desse número.
let numeroDobrado: number;
function dobrarNumeros(numeroDobrado: number) {
    return numeroDobrado * 2;

}

console.log(dobrarNumeros(6))

//Crie uma função chamada soma que aceita dois parâmetros numéricos e retorna a soma desses dois números.
let primeiroNumero: number;
let segundoNumero: number;
function Soma(primeiroNumero: number, segundoNumero: number) {
    return primeiroNumero + segundoNumero;

}

console.log(Soma(2, 5))

//Modifique a função dobrarNumero para que aceite um parâmetro opcional chamado vezes, que determina quantas vezes o número deve ser dobrado. Se nenhum valor for fornecido para vezes, o padrão deve ser 2.
let primeiroNumero2: number;
let segundoNumero2: number;
let vezes: number;
function Soma2(primeiroNumero2: number, segundoNumero2: number, vezes: number = 0) {
    if (vezes != 0) {
        return (primeiroNumero2 + segundoNumero2) * vezes;
    }
    else {
        return primeiroNumero2 + segundoNumero2
    }


}

console.log(Soma2(2, 5, 9))

//Crie uma função chamada maiorNumero que aceita dois parâmetros numéricos e retorna o maior deles. Se os números forem iguais, a função deve retornar "Os números são iguais".

function maiorNumero(menorNumero: number, maiorNumero: number) {
    if (menorNumero > maiorNumero) {
        return menorNumero;
    }
    else if ( maiorNumero > menorNumero) {
        return maiorNumero;
    }
    else {
        return "Os números são iguais!"
    }
}

console.log(maiorNumero(4, 3))

//Reescreva a função dobrarNumero como uma função anônima usando arrow function.
const anonimaDobrarNumero = (numero: number): number => {
    return numero * 2;
}
console.log(anonimaDobrarNumero(5))

//Crie uma função chamada calcularFatorial que aceita um número como parâmetro e retorna o fatorial desse número. O fatorial de um número é o produto de todos os inteiros positivos menores ou iguais a esse número.
function calcularFatorial(numero: number): number {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}
console.log(calcularFatorial(5));

//Crie uma função chamada verificarIdade que aceita um parâmetro idade. Se a idade for maior ou igual a 18, a função deve imprimir "Maior de idade", caso contrário, deve imprimir "Menor de idade".
function verificarIdade(idade:number) {
    if (idade >= 18) {
        console.log("ADULTO")
    }
    else {
        console.log("Menor de IDADE")
    }

}

verificarIdade(18)

//Crie uma função chamada contarAteDez que use um loop while para contar de 1 a 10 e imprima cada número.

function contadorAteDez(contador: number = 0) {
    while (contador != 10) {
        contador+=1;
        console.log(contador)
    }
}

contadorAteDez()