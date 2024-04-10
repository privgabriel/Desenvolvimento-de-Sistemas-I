// Armazenamento e Recuperação de Dados com async/await
async function salvarEObterDados(nome: string, valor: any): Promise<void> {
    await salvarNoLocalStorage(nome, valor);
    await recuperarDoLocalStorage(nome)
}

salvarEObterDados("Exemplo", { valor: 10});