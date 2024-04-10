// Trabalhando com Arrays de Tipos Diferentes

function concatenarArrays<T, U>(array1: T[], array2: U[]): (T | U)[] {
    return [...array1, ...array2]
}