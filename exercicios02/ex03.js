const leia = require('readline-sync');

function verificarParaDoarSangue() {
 
  const nome = leia.question('Digite seu nome: ');
  const idade = leia.questionInt(('Digite sua idade: '), 10);
  const primeiraDoacao = leia.question('Primeira doacao de sangue? (true/false): ') === 'true';

 
  let apto = false;

  if (idade >= 18 && idade <= 69) {
    if (idade < 60 || (idade >= 60 && idade <= 69 && !primeiraDoacao)) {
      apto = true;
    }
  }

 
  if (apto) {
    console.log(`${nome} está apto para doar sangue!`);
  } else {
    console.log(`${nome} não está apto para doar sangue!`);
  }
}

verificarParaDoarSangue();