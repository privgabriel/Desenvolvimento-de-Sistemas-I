// Implementar uma classe genérica chamada DataStore que receba T, sendo o tipo a ser definido e usado dentro da classe.

//     Crie um array dentro da classe do tipo T.
//     Implemente a classe DataStore<T> que tenha os seguintes métodos:
//         addData(item: T): Este método recebe um dado do tipo T e o adiciona ao array interno de dados.
//         printData(): Este método imprime todos os dados armazenados no array interno.
//     Crie uma instância da classe DataStore para armazenar números e outra para armazenar strings.
//     Adicione alguns dados à instância da classe DataStore para números e strings usando o método addData.
//     Imprima os dados armazenados nas instâncias da classe DataStore usando o método printData.

// Teste a sua implementação com diferentes tipos de dados para garantir que a classe DataStore seja genérica o suficiente para armazenar e manipular qualquer tipo de dado.


class DataStore<T> {
    private data: T[] = [];

    addData(item: T): void {
        this.data.push(item);
    }

    printData(): void {
        console.table(this.data);
    }
}

const numeros = new DataStore<number>();
numeros.addData(1);
const stirngs = new DataStore<string>();
stirngs.addData("Teste");
const qualquerDado = new DataStore<any>();
qualquerDado.addData({ nome: "Gabriel", idade: 23 });
