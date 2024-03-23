// Declare uma variável mensagem dentro de uma função e tente acessá-la fora da função. 
// Em seguida, declare uma variável outraMensagem fora da função e tente acessá-la dentro da função.

function MensagemFunc() {
    let mensagem: string = "Olá mundo!";
    console.log(mensagem)
}

MensagemFunc()
let outraMensagem: string = "Olá novamente!";
console.log(outraMensagem)
