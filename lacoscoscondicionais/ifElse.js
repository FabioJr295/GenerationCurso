const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("Digite seu nome: ");
idade = leia.questionInt("Digite sua idade: ");

if(idade >= 0 && idade <= 10){
	console.log("O seu plano de saude custará R$100,00 por mês.");
}else if(idade >= 11 && idade <=29){
	console.log("O seu plano de saude custará R$200,00 por mês.");
}

else{
	console.log("O seu plano de saude custará R$1000,00 por mês.");
}

if(nome.ToUpperCase === 'Fabio'){
	console.log('Muito obrigado! ${nome}' );
}