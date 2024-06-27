const leia = require('readline-sync');

const nome = leia.question("Nome do funcionário: ");
const bruto = leia.questionFloat("Salário bruto: ");
const noturno = leia.questionFloat("Adicional noturno: ");
const horasExtras = leia.questionFloat("Horas extras: ");
const desconto = leia.questionFloat("Descontos: ");

const somaSalario = bruto + noturno + (horasExtras * 5) - desconto;

console.log("O salário liquido de " + nome + " é de R$ " + somaSalario.toFixed(2));