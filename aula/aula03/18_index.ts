// Operação Assíncrona Simples

async function esperarUmSegundo(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Finalizado!")
}