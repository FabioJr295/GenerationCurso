const leia = require("readline-sync");

let numero, contador;

numero = leiaquestionInt("Calcule a tabuada do: ");

for(contador = 1; conador <= 10; contador++){
	console.log(numero + " x " + contador + " = " + numero * contador);
}