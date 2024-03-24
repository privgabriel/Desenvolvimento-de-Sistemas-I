// Crie um sistema de lista de tarefas em TypeScript, que tem as propriedades id, titulo, descricao e status, com as funções de criar uma nova tarefa, listar todas as tarefas e uma tarefa em específico, atualizar uma tarefa e deletar uma tarefa. Além disso, crie duas tarefas iniciais: uma com o título 'Task 1', marcada como não concluída, e outra com o título 'Task 2', marcada como concluída. Em seguida, realize as seguintes operações e imprima os resultados:
// Imprima todas as tarefas.
// Imprima a tarefa com ID igual a 2.
// Atualize a primeira tarefa com o título 'Task 1 updated' e marque-a como não concluída.
// Imprima todas as tarefas novamente.
// Exclua a tarefa com ID igual a 2.
// Imprima todas as tarefas após a exclusão.

interface Task {
    id: number;
    titulo: string;
    descricao: string;
    status: boolean;
  }
  
  let tasks: Task[] = [
    { id: 1, titulo: "Task 1", descricao: "Descrição da Task 1", status: false },
    { id: 2, titulo: "Task 2", descricao: "Descrição da Task 2", status: true },
  ];
  
  function criarTarefa(
    id: number,
    titulo: string,
    descricao: string,
    status: boolean
  ): void {
    tasks.push({ id, titulo, descricao, status });
  }
  
  function listarTodasTarefas(): Task[] {
    return tasks;
  }
  
  function encontrarTarefaPorId(id: number): Task | undefined {
    return tasks.find((task) => task.id === id);
  }
  
  function atualizarTarefa(
    id: number,
    novoTitulo: string,
    novoStatus: boolean
  ): void {
    const tarefa = encontrarTarefaPorId(id);
    if (tarefa) {
      tarefa.titulo = novoTitulo;
      tarefa.status = novoStatus;
    } else {
      console.log("Tarefa não encontrada.");
    }
  }
  
  function deletarTarefa(id: number): void {
    tasks = tasks.filter((task) => task.id !== id);
  }
  
  // Imprimindo todas as tarefas
  console.log("Todas as tarefas:");
  console.log(listarTodasTarefas());
  
  // Imprimindo a tarefa com ID igual a 2
  console.log("\nTarefa com ID igual a 2:");
  console.log(encontrarTarefaPorId(2));
  
  // Atualizando a primeira tarefa com o título 'Task 1 updated' e marcando-a como não concluída
  atualizarTarefa(1, "Task 1 updated", false);
  
  // Imprimindo todas as tarefas novamente
  console.log("\nTodas as tarefas após a atualização:");
  console.log(listarTodasTarefas());
  
  // Excluindo a tarefa com ID igual a 2
  deletarTarefa(2);
  
  // Imprimindo todas as tarefas após a exclusão
  console.log("\nTodas as tarefas após a exclusão da tarefa com ID igual a 2:");
  console.log(listarTodasTarefas());