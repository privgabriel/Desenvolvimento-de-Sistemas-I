// Usando a Interface Estendida
interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

interface UsuarioAdmin extends Usuario {
    nivelAcesso: string;
}

function verificarAcesso(usuario: UsuarioAdmin): void {
    if (usuario.nivelAcesso === "administrador") {
        console.log("Acesso Liberado!")
    } else {
        console.log("Acesso negado!")
    }
}