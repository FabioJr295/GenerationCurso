const leia = require('readline-sync');

console.log('\n****Bem-vindes a lanchonete da Clara Araujo!****\n');
console.log('////////////////////////Cardapio////////////////////////');
console.log(' Código do Produto | Produto         |  Preço Unitário  ');
console.log('     1             | Cachorro Quente |   R$ 10.00       ');
console.log('     2             | X-Salada        |   R$ 15.00       ');
console.log('     3             | X-Bacon         |   R$ 18.00       ');
console.log('     4             | Bauru           |   R$ 12.00       ');
console.log('     5             | Refrigerante    |   R$ 8.00        ');
console.log('     6             | Suco de laranja |   R$ 13.00       ');
console.log('////////////////////////////////////////////////////////');

let codigo = leia.questionInt('\nDigite o codigo do produto: ',{limitMessage: 'Apenas numeros inteiros!'});
let quantidade =  leia.questionInt('Digite a quantidade: ',{limitMessage: 'Apenas numeros inteiros!'});


let preco;


switch(codigo){
    case 1:
        preco = 10.00;
        console.log = ('\nProduto: Cachorro Quente');
        break
    case 2:
        preco = 15.00
        console.log('\nProduto: X-Salada');
        break
    case 3:
        preco = 18.00
        console.log('\nProduto: X-Bacon');
        break
    case 4:
        preco = 12.00
        console.log('\nProduto: Bauru');
        break
    case 5:
        preco = 8.00
        console.log('\nProduto: Refrigerante');
        break
    case 6:
        preco = 13.00
        console.log('\nProduto: Suco de Laranja');
        break
    default:
        console.log('Esse código não existe!')  ;      
}

let valorTotal = preco*quantidade

console.log(`\nValor total: R$${valorTotal.toFixed(2)}`);