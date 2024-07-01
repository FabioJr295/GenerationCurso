// const leia = require('readline-sync')
// let vetorstring = [
//     "Boxer",
//     "Pastor Alemão",
//     "Pinscher",
//     "Husky Siberiano",
//     "Corgi"
// ];

// let numero = new Array(5)
  
// for (let indice = 0; indice < vetorstring.length; indice++){
//     console.log(`Posição[${indice}] = ${vetorstring[indice]}`);
// }
  
// for (let indice = 0; indice < numero.length; indice++){
//     numero[indice] = leia.questionInt('Digite um numero ');
// }

// console.table(numero) //Cria uma tabeala na tela

// console.table(vetorstring.sort()) //Ordena

let vetorNumero = [1,2,3,4,5,6,22,34,67,99]

console.table(vetorNumero.sort(compareAsc).reverse())//decrescente

function compareAsc(a, b) { //compara o segundo numero com o primeiro crescente
    return a - b;
  }