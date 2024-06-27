const leia = require('readline-sync')

let quantidade;
let altura;

quantidade = leia.questionInt("Digite um valor do tipo inteiro: ")

console.log(" O valor inteiro digitado foi: " + quantidade)

altura = leia.questionFloat("/nDigite um valor do tipo Float: n/", {limitmessage: 'Erro! Por favor digite um valor numero float.'});
console.log("O valor float digitado foi: " + altura)

//  Operadores 

let x = 6;
let y = 2;
let z = 1;
let resul;

// x = y;

// console.log("Atribuição simples (x = y): " + x);

// resul = x + y;
// x += y;
// console.log("/nAtribuição com soma (x = x + y): " + (x + resul));

// x -= z;
// console.log("/nAtribuição com subtração (x = x - z): " + x);


// x %= y;
// console.log("/nAtribuição com o módulo (x = x % y): " + x);

