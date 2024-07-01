const leia = require('readline-sync');

let idadeMenor =0;
let idadeMaior= 0;

let idade;

idade = leia.questionInt('Digite uma idade: ');

while(idade > 0){
    
    if(idade < 21){
        idadeMenor++
    } else if(idade > 50){
        idadeMaior++
    }
    idade = leia.questionInt('Digite uma idade: ');
}

console.log(`Total de pessoas menores de 21 anos: ${idadeMenor}`);
console.log(`Total de pessoas maiores de 50 anos: ${idadeMaior}`);

// const totalPessoas = (idade<21)? idadeMenor++ : idadeMaior++