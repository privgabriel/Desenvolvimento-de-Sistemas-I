// Crie uma função que verifique se um objeto possui determinadas propriedades. 
// A função deve aceitar um objeto e um array de strings contendo os nomes das propriedades a serem verificadas.

function VerificarPropriedades(objeto:any, propriedades:string[]): boolean {
    return propriedades.every((prop) => objeto.hasOwnProperty(prop));
}

let pessoa = {
    nome: "Ana",
    idade: 30,
    email: "kkk@gmail.com",
};


console.log(VerificarPropriedades(pessoa, ["nome", "email"])); // Saída: true
console.log(VerificarPropriedades(pessoa, ["nome", "telefone"])); // Saída: false
