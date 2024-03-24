// Usando a Classe Genérica
class Pilha<T> {
    private elementos: T[] = [];

    adicionar(elemento: T): void {
        this.elementos.push(elemento)
    }
    
    remover(): T | undefined {
        return this.elementos.pop()
    }   
}

const pilhaNumeros = new Pilha<number>();
pilhaNumeros.adicionar(1);
pilhaNumeros.adicionar(2);
pilhaNumeros.adicionar(3);
console.log(pilhaNumeros.remover());