// Extensão de Interface

interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

interface UsuarioAdmin extends Usuario {
    nivelAcesso: string;
}