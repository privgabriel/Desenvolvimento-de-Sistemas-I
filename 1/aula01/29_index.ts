// Crie uma função chamada verificarIdade que aceita um parâmetro idade. 
// Se a idade for maior ou igual a 18, a função deve imprimir "Maior de idade", caso contrário, deve imprimir "Menor de idade".

const verificarIdade = (idade: number): void => {
    if (idade >= 18) {
        console.log("Maior de idade")
    }
    else {
        console.log("Menor de idade!")
    }
};