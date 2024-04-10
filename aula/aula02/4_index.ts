// Escreva uma função chamada exibirInfo que aceita um objeto com informações pessoais (nome, idade, cidade, etc.) e exibe essas informações.

function ExibirInfo({
    nome,
    idade,
    ...outrasInfo
}: {
    nome: string;
    idade: number;
    [key: string]: any;
}) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
    console.log(`Outras informações: ${outrasInfo}`);
}

const pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro",
    profissao: "Advogada",
};

ExibirInfo(pessoa)