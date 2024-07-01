const leia = require('readline-sync')

let soma= 0;
let matrizInteiros = Array(2) 


for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3)
} 

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){ //percorre linhas matriz
    for(let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){ //percorre as colunas matriz e pega o tamanho da linha da matriz, que é 3
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento ${indiceLinha} e ${indiceColuna} : `)
    }

}

console.table(matrizInteiros)

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){ //percorre linhas matriz
    for(let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){ //percorre as colunas matriz

        soma += matrizInteiros[indiceLinha][indiceColuna] //soma dos elementos da linha

    }
    console.log(`Soma dos elementos da linha ${indiceLinha} é ${soma}`)
    soma = o; //zera para somar as outras linhas
}