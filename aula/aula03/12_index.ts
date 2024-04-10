// Restrições de Tipo Genérico

function trocarElementos<T>(
    array: T[],
    indice1: number,
    indice2: number
): void {
    if (typeof array[indice1] !== typeof array[indice2]) {
        throw new Error("Os lementos devem ser do mesmo tipo");
    }
    const temp = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = temp;
}