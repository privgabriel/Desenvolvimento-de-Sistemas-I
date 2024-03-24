// Escreva uma função chamada ordenarStrings que recebe um array de strings como entrada e retorna um novo array com as strings ordenadas em ordem alfabética.

function OrdenarStrings(stringsArray: string[]): string[] {
    return stringsArray.sort();
}

const palavras: string[] = ["banana", "abacaxi", "laranja", "uva"];

console.log(OrdenarStrings(palavras))