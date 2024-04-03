interface Repositorio {
    name: string;
    url: string;
}

async function buscarRepositorio(nome: string): Promise<Repositorio[]> {
    const resposta = await fetch(`https://api.github.com/users/${nome}/repos`);
    const data = await resposta.json();
    return data.map((repo: any) => ({
        name: repo.name,
        url: repo.html_url
    }));
}

function FiltroRepositorio(repositorios: Repositorio[], searchTerm: string): Repositorio[] {
    return repositorios.filter(repo => repo.name.includes(searchTerm));
}

async function main() {
    try {
        const nome = "privgabriel"; 
        const repositorios = await buscarRepositorio(nome);
        console.log("Repositórios obtidos:");
        console.table(repositorios);

        const termo = "portifolio"; 
        const filtrarRepositorios = FiltroRepositorio(repositorios, termo);
        console.log(`Repositórios filtrados por "${termo}":`);
        console.table(filtrarRepositorios);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

main();