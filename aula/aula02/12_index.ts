// Dada uma variável valor do tipo any, faça uma type assertion para garantir que seu tipo seja number.
let valor: any = "10";
let numero: number = <number>valor;
// ou
// let outroNumero: number = valor as number;

console.log(numero)
// console.log(outroNumero)