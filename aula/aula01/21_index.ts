// Crie um array de objetos, onde cada objeto representa uma pessoa e tem as propriedades nome e idade.
// Em seguida, use uma arrow function para percorrer esse array e imprimir uma mensagem de saudação para cada pessoa, utilizando template literals e 
// desestruturação para extrair os dados de cada objeto.

const pessoas = [
    {nome: 'Gabriel Santos', idade: 22},
    {nome: "João", idade: 19}
]

pessoas.forEach(({ nome, idade }) => console.log(`Olá, ${nome}, você tem ${idade} anos.`))