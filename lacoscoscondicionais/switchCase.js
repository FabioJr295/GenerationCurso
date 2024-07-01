const leia = require('readline-sync');

let nome;
let codigo;

nome = leia.question("Digite seu nome: ");

console.log("Faixas etárias: ");
console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

codigo = leia.questionInt("Digite o codigo da sua faixa etaria: ");

switch(codigo){
	case 1:
	console.log("O seu plano de saude custará R$100,00 por mês.");
	break;
	case 2:
	console.log("O seu plano de saude custará R$200,00 por mês.");
	break;
	case 3:
	console.log("O seu plano de saude custará R$300,00 por mês.");
	break;
	case 4:
	console.log("O seu plano de saude custará R$400,00 por mês.");
	break;
	case 5:
	console.log("O seu plano de saude custará R$500,00 por mês.");
	break;
	case 6:
console.log("O seu plano de saude custará R$1000,00 por mês.");
	break;
	default:
	console.log("Digite um codigo valido!");
}
