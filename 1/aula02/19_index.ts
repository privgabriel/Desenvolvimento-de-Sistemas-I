// Crie uma função que mescla as propriedades de dois objetos em um terceiro objeto. Se houver conflito entre as propriedades, o valor do segundo objeto deve prevalecer.

function MesclarObjetos(objeto1:any, objeto2: any): any {
    return Object.assign({}, objeto1, objeto2);
}

let objeto1 = { a: 1, b: 2 };
let objeto2 = { b: 3, c: 4 };

let objetoMesclado = MesclarObjetos(objeto1, objeto2);
console.log(objetoMesclado)