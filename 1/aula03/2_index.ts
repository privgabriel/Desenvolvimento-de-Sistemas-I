// Usando a Interface de Usuário

interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

function ImprimirUsuario(usuario: Usuario): void {
    console.log(
        `Nome: ${usuario.nome}, Email: ${usuario.email}, Idade: ${usuario.idade}`
      );
}
