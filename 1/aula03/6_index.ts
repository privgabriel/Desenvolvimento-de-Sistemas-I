// Implementando uma Classe para Usuário Administrador

interface UsuarioAdmin extends Usuario {
    nivelAcesso: string;
}
class UsarioAdministradorImplementacao implements UsuarioAdmin {
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
