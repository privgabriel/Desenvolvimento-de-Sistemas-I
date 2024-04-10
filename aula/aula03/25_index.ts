// Task Manager

// Definindo a interface para uma tarefa
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// Classe principal da aplicação
class TaskManager {
    async getTasks(): Promise<void> {
        try {
            const resposta = await fetch(
                "https://jsonplaceholder.typicode.com/todos");
            if (!resposta.ok) {
                throw new Error("Erro ao buscar tarefas");
            }
            const tasks: Task[] = await resposta.json();
            console.log(`Tasks: ${tasks}`)
            this.saveTasksToLocalStorage(tasks)
        } catch (erro) {
            console.log(`Error ${erro}`)
        }
    }

    saveTasksToLocalStorage(tasks: Task[]): void {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Tasks saved to local Storage");
    }
}

// Inicial a aplicação
const taskManager = new TaskManager();
taskManager.getTasks();
