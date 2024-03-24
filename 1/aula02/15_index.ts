// Declare uma função chamada dobrarNumero que aceita um número e retorna o dobro desse número. Observe como o TypeScript infere automaticamente o tipo de retorno da função.

function dobrarNumero(numero:number): number {
    return numero * 2;
}
console.log(dobrarNumero(5))