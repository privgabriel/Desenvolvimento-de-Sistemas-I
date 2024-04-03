// Sistema de Gerenciamento de Funcionários

// Nesta atividade prática, vamos criar um sistema simples de gerenciamento de funcionários usando objetos, desestruturação, template literals e interfaces em TypeScript.

// Funcionalidades

//     Defina uma interface Funcionario que tenha as propriedades nome, idade, cargo e salario.
//     Crie alguns objetos de funcionários com dados fictícios.
//     Utilize a desestruturação para extrair as propriedades dos objetos de funcionários e exibi-las usando template literals.
//     Implemente uma função aumentarSalario que receba um funcionário e um percentual de aumento de salário como parâmetros, e atualize o salário do 
//     funcionário de acordo com o percentual dado.
//     Teste a função aumentarSalario com um dos funcionários e exiba o novo salário.

interface Funcionario {
    nome: string;
    idade: number;
    cargo: string;
    salario: number;
}

const funcionario1: Funcionario = {
    nome: "Gabriel",
    idade: 23,
    cargo: "Desenvolvedor",
    salario: 5000
};

console.log(funcionario1.salario)

const funcionario2: Funcionario = {
    nome: "Maria",
    idade: 30,
    cargo: "Designer",
    salario: 4000
};

function aumentarSalario(funcionario: Funcionario, percentual: number): void {
    funcionario.salario += funcionario.salario * percentual / 100;
}
aumentarSalario(funcionario1, 10);

