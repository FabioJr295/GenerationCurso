const leia = require("readline-sync");

let continua;
let numero1, numero2, resultado;

do{

	numero1 = leia.questionInt("Digite o primeiro numero: ");
	numero2 = leia.questionInt("Digite o segundo numero: ");

	resultado = numero1 + numero2;
	console.log("O resultado da soma é: " + resultado);

	console.log("+++++++++++++MENU+++++++++++++");
	continua = leia.keyInYNStrict("Deseja continuar usando a calculadora de soma: ");
	console.log("++++++++++++++++++++++++++++++");

}while(continua);