// Armazenamento Assíncrono

async function salvarNoLocalStorage(nome:string, valor: any): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    localStorage.setItem(nome, JSON.stringify(valor));
    console.log("Dados salvos no Local Storage.");
}

salvarNoLocalStorage("Exemplo", {valor: 10})