//  Usando a Interface Genérica
class ParOrdenado17<T, U> implements Par<T, U> {
    constructor(public primeiro: T, public segundo: U) {}
}

const parNumerico: Par<number, number> = new ParOrdenado17(1, 2);
const parString: Par<string, string> = new ParOrdenado17("Hello", "World");