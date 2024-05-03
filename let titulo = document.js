import { numeroSecreto, exibirTextoNaTela } from "./app";

// Resolução de exercicios 23/04/2023
1.
function saudação() {
    console.log (`Olá, mundo!`);
}
saudação();

2.
function cumprimentar(nome){
    console.log (`Olá ${nome}! `);
}
cumprimentar("yasmin");
3.
function calcularDobro(numero){
    return numero * 2;
}
let resultadodoDobro = calcularDobro(5);
console.log(resultadodoDobro);

4.
function media(a,b,c){
    return (a+b+c)/3;
}
let media =calcularMedia(4,7,10);
console.log(media);
5.
function maiorNumero(a,b){
    return a > b? a:b;
}
let maiorNumero = encontrarMaior (15,9);
console.log(maiorNumero);

6.
function calcularPorEleMesmo(Numero1){
    function numero1 * numero1;
}
let resultadoDaMultiplicação = calcularPorEleMesmo (6)
console.log(resultadoDaMultiplicação);
function verificarChute() {
    let chute = document.querySelector(`input`).value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela(`h1`, `Acertou!`);
        exibirTextoNaTela(`P`, `Você ganhou o jogo do número secreto!`);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela(`P`, `O Número secreto é menor`);

        } else {
            exibirTextoNaTela(`p`, `O Número secreto é maior`);
        }
    }

}

//resolução de exercicios 25/04/2024
1.
function calcularIMC (altura,peso) {
    let imc = peso/(alturametros *alturametros ),

}
2.
function calcularValorFatorial (número){

}

3.
function converterDolar(valor){
    let cotacaodolar =  4.80;
    let valorEmReais = valorEmDolar * cotacaodolar;
    return valorEmReais.toFixed(2);

}
4.
function calcularÀrea (altura,largura){
    let área = altura * largura;
    let perimetro = 2* (altura + largura);
// perimetro da sala retangular é 2x a altura e a largura pois o perimetro é a soma de todos os lados.

}
5.
function calcularAreaPerimetroSalaCircular (raio){
    let área = Math.PI*altura * largura;
    let perimetro = 2 * Math.PI * r
   // C = 2 * π * r
   console.log(`Àrea da sala: ${área.toFixed(2)} metros quadrados `);
   console.log(`Perimetro da sala:${perimetro.toFixed(2)}metros`);
   calcularAreaPerimetroSalaCircular(altura,largura);
}
6.
function calcularTabuada(7){
    for (let i = 1 ; <= 10 ; i++){
        let resultado = numero *i;
        
    } 
}
//Exercício 5
function tabuada(numeroTabuada) {
    numero = 1;
    while (numero <=10) {
        let tabuadaExpressao = numeroTabuada * numero;
        numero++;
        console.log(tabuadaExpressao);
    }
}
tabuada(10);

1.
let listaGenerica [];

2.
let linguagensDeProgramacao = [`JavaScript`,`C`,`C++`,`Kotlin`,`Python`];

3.
linguagensDeProgramacao.push = [`Java`,`Ruby`,`GoLang`];

4.
listaNomes = [`banana`,`macã´,`uva`];
console.log (listaNomes[0]);

5.
console.log (listaNomes [1]);

6.
console.log (listaNomes[2]);