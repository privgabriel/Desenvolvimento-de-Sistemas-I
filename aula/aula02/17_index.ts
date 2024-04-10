// Crie um programa que calcule a média das notas de um estudante. 
// O objeto estudante deve conter as propriedades nome, notas e um método calcularMedia() que retorna a média das notas.

type Estudante = {
    nome: string;
    notas: number[]
    calcularMedia(): number;
};

let estudante: Estudante = {
    nome: "João",
    notas: [7.5, 8.0, 9.0],
    calcularMedia() {
        let soma = this.notas.reduce((acc, curr) => acc + curr, 0);
        return soma / this.notas.length;
    },
};

console.log(
    `${estudante.nome} possui média ${estudante.calcularMedia().toFixed(2)}`
  );