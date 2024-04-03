// Exercício 01 - Obrigatório

// Manipulação de Dados de Usuário

// Nesta atividade prática, vamos criar uma função em TypeScript que manipula dados de usuário, incluindo validação e tratamento de erros usando try/catch, 
// desestruturação e demais conceitos.

// Funcionalidades

//     Defina uma interface Usuario que contenha as propriedades nome, email e idade.
//     Crie uma função criarUsuario que receba um objeto contendo os dados do usuário como parâmetro.
//     Na função criarUsuario, utilize desestruturação para extrair o nome, email e idade do objeto de entrada.
//     Realize a validação dos dados do usuário dentro da função criarUsuario, verificando se o nome é uma string não vazia, se o email 
//     é uma string válida e se a idade é um número maior que zero.
//     
//     Utilize um bloco try/catch ao chamar a função criarUsuario para capturar e tratar erros que possam ocorrer durante a execução.

interface Usuario {
  nome: string;
  email: string;
  idade: number;
}
function criarUsuario(dadosUsuario: { nome: string, email: string, idade: number }): Usuario {
  const { nome, email, idade } = dadosUsuario;
  var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


  if (typeof nome !== 'string' || nome === '') {
      throw new Error('Nome inválido');
    }

  if (idade > 0 && typeof idade !== 'number') {
      throw new Error("Idade inválida!")
  }

  if (!emailRegex.test(email)) {
      throw new Error('Email inválido');
    }
  return {
      nome,
      email,
      idade
    };
}

try {
  const primeiroUsuario = { nome: 'Gabriel Santos', email: 'gab$!$@!$!@2riel.santos@amf.edu.br', idade: 22 };
  const usuario = criarUsuario(primeiroUsuario);
  console.log(usuario);
} catch (error) {
  console.error(error.message);
}
  

