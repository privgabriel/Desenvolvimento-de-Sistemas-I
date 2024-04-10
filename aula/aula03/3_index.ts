// Implementando uma Interface

interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

class UsuarioPadrao implements Usuario {
    constructor(
        public nome: string,
        public idade: number,
        public email: string
    ) {}

    imprimirInformacoes(): void {
        console.log(
            `Nome: ${this.nome}, Email: ${this.email}, Idade: ${this.idade}`
          );
    }
}