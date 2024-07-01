const readline = require("readline-sync");

function calcularOperacao(numero1, numero2, operacao) {
  switch (operacao) {
    case 1:
      return numero1 + numero2;
    case 2:
      return numero1 - numero2;
    case 3:
      return numero1 * numero2;
    case 4:
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        return "Divisão por zero não é possível";
      }
    default:
      return "Operação Inválida!";
  }
}

const numero1 = parseFloat(readline.question("Digite o 1 numero: "));

const numero2 = parseFloat(readline.question("Digite o 2 numero: "));

const operacao = parseInt(readline.question("Operacao 1 - Soma, 2 - Subtracao, 3 - Multiplicacao, 4 - Divisao: "));

const resultado = calcularOperacao(numero1, numero2, operacao);

if (typeof resultado === "number") {
  console.log(`${numero1} ${obterSimboloOperacao(operacao)} ${numero2} = ${resultado}`);
} else {
  console.log(resultado);
}

function obterSimboloOperacao(operacao) {
  switch (operacao) {
    case 1:
      return "+";
    case 2:
      return "-";
    case 3:
      return "*";
    case 4:
      return "/";
    default:
      return "?";
  }
}