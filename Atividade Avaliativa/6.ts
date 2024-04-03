// Gerenciador de Tarefas Colaborativo

// O Gerenciador de Tarefas Colaborativo é uma aplicação em TypeScript que permite a colaboração entre membros de uma equipe para gerenciar e acompanhar 
// as tarefas do projeto. Ele utiliza tipagem estática, objetos, estruturas condicionais e de repetição, desestruturação, 
// template literals e funções para oferecer uma plataforma de gerenciamento de tarefas flexível e fácil de usar.

// Funcionalidades

//     Adicionar uma nova tarefa com título, descrição, responsável e status.
//     Designar responsáveis por tarefas.
//     Marcar tarefas como concluídas.
//     Visualizar todas as tarefas do projeto.
//     Filtrar tarefas por responsável ou status.


interface Tarefa {
    titulo: string;
    descricao: string;
    responsavel: string;
    status: "pendente" | "concluida";
}

type Tarefas = Tarefa[];

const tarefas: Tarefas = [];

function adicionarTarefa(titulo: string, descricao: string, responsavel: string): void {
    tarefas.push({
        titulo,
        descricao,
        responsavel,
        status: "pendente"
    });
}

function designarResponsavel(titulo: string, responsavel: string): void {
    const tarefa = tarefas.find(tarefa => tarefa.titulo === titulo);
    if (tarefa) {
        tarefa.responsavel = responsavel;
    }
}

function marcarConcluida(titulo: string): void {
    const tarefa = tarefas.find(tarefa => tarefa.titulo === titulo);
    if (tarefa) {
        tarefa.status = "concluida";
    }
}

function visualizarTarefas(): void {
    console.log("Tarefas do projeto:");
    tarefas.forEach(tarefa => {
        console.log(`Título: ${tarefa.titulo}`);
        console.log(`Descrição: ${tarefa.descricao}`);
        console.log(`Responsável: ${tarefa.responsavel}`);
        console.log(`Status: ${tarefa.status}`);
        console.log();
    });
}


function filtrarTarefasPorResponsavel(responsavel: string): Tarefas {
    return tarefas.filter(tarefa => tarefa.responsavel === responsavel);
}


function filtrarTarefasPorStatus(status: "pendente" | "concluida"): Tarefas {
    return tarefas.filter(tarefa => tarefa.status === status);
}

// Adicionando tarefas
adicionarTarefa("Criar layout", "Criar o layout do sistema", "Gabriel");
adicionarTarefa("Implementar funcionalidades", "Implementar as funcionalidades do sistema", "Maria");
adicionarTarefa("Testar aplicação", "Testar a aplicação para identificar bugs", "João");

