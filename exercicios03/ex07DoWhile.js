const leia = require('readline-sync');

let numero;
let media;
let qntNumero =0;
let soma =0;

do{
    numero = leia.questionInt('Digite um numero: ', {limitMessage: 'Digite um numero inteiro!'});
    if(numero % 3 == 0 && numero !=0){
        qntNumero++
        soma+=numero
        media = soma/ qntNumero
    }
    

} while(numero != 0);
    

console.log(`A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);