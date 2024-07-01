const leia = require('readline-sync');

console.log('=====================================');
console.log('Codigo do Operacao | Operacao        ');
console.log('     1             | Saldo           ');
console.log('     2             | Saque           ');
console.log('     3             | Depósito        ');
console.log('=====================================');

let codigo = leia.questionInt('\nDigite o codigo do produto: ',{limitMessage: 'Apenas numeros inteiros!'});

let saldo = 1000.00;
let valor;



    switch(codigo){
        case 1:
            saldo = saldo;
            console.log('\nOperação - Saldo');
            console.log(`\nSaldo: R$ ${saldo.toFixed(2)}`);
            break
        case 2:
            valor = leia.questionFloat('\nDigite o valor: ',{limitMessage: 'Apenas numeros reais!'});

            if(valor>saldo){
                console.log('\nOperação - Saque');
                console.log('\nSaldo Insuficiente!');
    
            } else{
                saldo -= valor;
                console.log('\nOperação - Saque');
                console.log(`\nNovo Saldo: R$${saldo.toFixed(2)}`);
            }
            break
        case 3:
            valor = leia.questionFloat('\nDigite o valor: ',{limitMessage: 'Apenas numeros reais!'});
            saldo +=valor
            console.log('\nOperação - Depósito');
            console.log(`\nNovo Saldo: R$${saldo.toFixed(2)}`);
            break
       
        default:
            console.log('\nOperação Inválida!');  
    }