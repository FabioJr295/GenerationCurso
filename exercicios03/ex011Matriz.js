const leia = require("readline-sync");

let soma = 0;

let vetorMedia = Array(10);
let matrizInteiros = new Array(10);


for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionFloat(`Digite as notas: `);
  
    }
    
}

console.table(matrizInteiros);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    soma = 0
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
      
         // Armazena a soma dos elementos da linha 
        soma += matrizInteiros[indiceLinha][indiceColuna];

    }

     // Guarda a soma no vetor auxiliar, transforma o resultando em float, pois está saindo em string e fixa 1 casa decimal
     vetorMedia[indiceLinha] = parseFloat((soma / 4.0).toFixed(1));

      

    
}

console.log(vetorMedia);