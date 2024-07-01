const leia = require("readline-sync");

let numero, i, numero2;

numero = leia.questionInt("Digite o primeiro numero do intervalo: ");
numero2 = leia.questionInt('Digite o ultimo numero do intervalo: ');


if(numero<numero2){
    for(i = numero; i <= numero2; i++){
        if(i%3 == 0 && i%5==0) {
            console.log(`${i} é múltiplo de 3 e 5`);
    
        }
    }
}else{
    console.log('Intervalo Inválido!');
}