// Testando os Exercícios Anteriores
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

class UsuarioPadrao7 implements Usuario {
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

interface UsuarioAdmin7 extends Usuario {
    nivelAcesso: string;
}
class UsarioAdministradorImplementacao7 implements UsuarioAdmin {
    constructor (
        public nome: string,
        public email: string,
        public idade: number, 
        public nivelAcesso: string
    ) {}

    verificarAcesso(): void {
        if (this.nivelAcesso === "administrador") {
            console.log("Acesso Concedido!")
        } else {
            console.log("Acesso Negado!")
        }
    }
}

const usuarioPadrao = new UsuarioPadrao7("João",  30, "joao@exemple.com");
ImprimirUsuario(usuarioPadrao)

const usuarioAdmin =  new UsarioAdministradorImplementacao7(
    "Maria",
    "maria@example.com",
    35,
    "administrador"
);

function verificarAcesso7(usuario: UsuarioAdmin): void {
    if (usuario.nivelAcesso === "administrador") {
        console.log("Acesso Liberado!")
    } else {
        console.log("Acesso negado!")
    }
}

verificarAcesso7(usuarioAdmin);
usuarioAdmin.verificarAcesso();