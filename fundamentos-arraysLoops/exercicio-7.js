// questão 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = Infinity; // metodo numero, representao numero infinito negativo no js
for(let index = 0; index < numbers.length; index +=1) {
    if(menorValor > numbers[index]) { // se colocar o menor numero e comparar com o maior numero do array
        menorValor = numbers[index]; // o maior numero será a atualizado para o que tem no array numbers na posição index
    }
}
console.log(menorValor);