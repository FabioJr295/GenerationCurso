const leia = require("readline-sync");

let numero, contador, numero2, cont=0;

for(contador = 1; conador <= 4; contador++){
	numero = leiaquestionInt("Calcule a multiplicação de: ");
	numero2 = leiaquestionInt("Vezes o numero: ");
	console.log(numero + " x " + numero2 + " = " + numero * numero2);

	if(numero % 2 == 0){
	cont++
}
}