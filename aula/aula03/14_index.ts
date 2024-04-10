// Usando Restrições de Tipo Genérico
function concatenarArrays14<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2];
  }