// Criando uma Função Genérica

function trocarElementos<T>(
    array: T[],
    indice1: number,
    indice2: number
): void {
    const temp = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = temp;
}