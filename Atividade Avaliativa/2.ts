// Exercício 02 - Obrigatório

// Gerenciador de Tarefas com Armazenamento Local

// Nesta atividade prática, vamos criar um simples gerenciador de tarefas em TypeScript que utiliza o armazenamento local do navegador para persistir os d
// ados das tarefas. Para isso, vamos utilizar as funcionalidades de armazenamento local (localStorage). Use a programação funcional para realizar este exercício, 
// não é necessário o uso de classes.

// Funcionalidades

interface Task {
    id: number;
    titulo: string;
    completo: boolean;
}

class TaskManager {
    buscarTasksDoLocalStorage(): Task[] {
        const tasksString = localStorage.getItem("tasks");
        if (tasksString) {
            return JSON.parse(tasksString);
        } else {
            return [];
        }
    }

    salvarTaskLocalStorage(tasks: Task[]): void {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    adicionarTask(task: Task): void {
        const tasks = this.buscarTasksDoLocalStorage();
        tasks.push(task);
        this.salvarTaskLocalStorage(tasks);
    }

    listarTasks(): void {
        const tasks = this.buscarTasksDoLocalStorage();
        console.log("Lista de tarefas:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Título: ${task.titulo}, Concluída: ${task.completo}`);
        });
    }

    deletarTasks(id: number): void {
        let tasks = this.buscarTasksDoLocalStorage();
        tasks = tasks.filter(task => task.id !== id);
        this.salvarTaskLocalStorage(tasks);
    }
}


const taskManager = new TaskManager();
const newTask: Task = { id : 1, titulo: "Gabriel Santos", completo: true };
taskManager.adicionarTask(newTask);
taskManager.listarTasks();
taskManager.deletarTasks(1);



