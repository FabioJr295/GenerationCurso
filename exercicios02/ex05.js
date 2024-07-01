const readline = require("readline-sync");

function codigoProduto(codigo) {
  switch (codigo) {
    case 1:
      return { produto: "Cachorro Quente", preco: 10.0 };
    case 2:
      return { produto: "X-Salada", preco: 15.0 };
    case 3:
      return { produto: "X-Bacon", preco: 18.0 };
    case 4:
      return { produto: "Bauru", preco: 12.0 };
    case 5:
      return { produto: "Refrigerante", preco: 8.0 };
    case 6:
      return { produto: "Suco de laranja", preco: 13.0 };
    default:
      return null;
  }
}

const codigo = parseInt(readline.question("Código do Produto: "));

const produtoInfo = codigoProduto(codigo);

if (produtoInfo) {
  const quantidade = parseInt(readline.question("Quantidade: "));

  const valorTotal = produtoInfo.preco * quantidade;

  console.log(`Produto: ${produtoInfo.produto}`);
  console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
} else {
  console.log("Código de produto inválido. Por favor, digite um código entre 1 e 6.");
}
