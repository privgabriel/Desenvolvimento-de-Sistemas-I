// Lidando com Erros

async function buscarDados(): Promise<void> {
    try {
        const resposta = await fetch("https://api.example.com/data");
        if (!resposta.ok) {
            throw new Error("Erro na requisição:" + resposta.status);
        }
        const dados = await resposta.json();
        console.log(`Dados recebidos, ${dados}`)
    } catch (erro) {
        console.log(`Erro ao buscar dados: ${erro}`)
    }
}

buscarDados()