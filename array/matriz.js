const leia = require('readline-sync')

let matrizInteiros = Array(3) //inicializa a matriz 3 linhas (caixa com 3 divisoes)

///criar matriz quadradica 3x3 - vetores empilhados

for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3)
} // adiciona em cada uma das linhas (divisoria) uma outra linha com 3 lugares
// preenche a divisoria com 3 espacos

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){ //percorre linhas matriz
    for(let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){ //percorre as colunas matriz
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento ${indiceLinha} e ${indiceColuna} : `)
    }

}

console.table(matrizInteiros)