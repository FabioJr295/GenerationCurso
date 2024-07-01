const leia = require('readline-sync');

let vetor = [2,5,1,3,4,9,7,8,10,6];

let numero = leia.questionInt('Digite um numero: ');

if(vetor.includes(numero)){
    console.log(`O número ${numero} está localizado na posição ${vetor.indexOf(numero)}`);

}else{
    console.log(`O número ${numero} não foi encontrado`);
}