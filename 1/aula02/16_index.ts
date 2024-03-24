// Declare uma variável valor e atribua a ela um valor que pode ser uma string ou um número. Especifique explicitamente o tipo da variável como uma união de tipos.

let valor: string | number = "42";
console.log(valor.length);
valor = 42;
console.log(valor.toFixed(2)); // Saída: 42.00