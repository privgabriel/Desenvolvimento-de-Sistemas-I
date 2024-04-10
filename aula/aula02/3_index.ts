// Crie dois objetos com propriedades. Use o operador spread para criar um terceiro objeto que combine as propriedades dos dois primeiros objetos. 
// Se houver propriedades com o mesmo nome, o valor do segundo objeto deve prevalecer.

const pessoas = { nome:"Gabriel Santos", idade: 22 };
const infoAdicionais = { cidade: "Santa Maria", profissao: "Ethical Hacking" };
const infoCompleta = { ...pessoas, ...infoAdicionais };

console.log(infoCompleta)