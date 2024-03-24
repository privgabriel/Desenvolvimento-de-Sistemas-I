// Usando a Função Genérica

function trocarElementos<T>(
    array: T[],
    indice1: number,
    indice2: number
): void {
    const temp = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = temp;
}

const numeros: number[] = [1, 2, 3, 4, 5];
console.log(`Antes da troca ${numeros}`);
trocarElementos(numeros, 0, 1)
console.log(`Após a troca ${numeros}`);


