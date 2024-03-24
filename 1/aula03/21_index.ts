// Uso de async/await para Tratamento de Promises
async function bucarDados(): Promise<void> {
    try {
        const resposta = await fetch("https://api.example.com/data");
        const dados = await resposta.json();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro)
    }
}

bucarDados();