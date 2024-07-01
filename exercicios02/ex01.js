const leia = require('readline-sync');

let A;
let B;
let C;

A = leia.questionInt("Digite o numero A: ");
B = leia.questionInt("Digite o numero B: ");
C = leia.questionInt("Digite o numero C: ");

if(A + B > C){
    console.log("A soma de A + B é maior que C");
}else if( A + B < C){
    console.log("A soma de A + B é menor que C");
}else{
    console.log("A soma de A + B é igual a C");
}