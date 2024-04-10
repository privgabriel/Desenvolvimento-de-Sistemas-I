// Criando uma Classe Genérica

class Pilha<T> {
    private elementos: T[] = [];

    adicionar(elemento: T): void {
        this.elementos.push(elemento)
    }
    
    remover(): T | undefined {
        return this.elementos.pop()
    }   
}