/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

// primeiro percorre. o array para pegar os numeros.

function apareceMais(numeros) {
  let numeroRepetido = 0;
  let numeroContado = 0;
  let indexRepetido = 0;
  for(let index = 0; index < numeros.length; index +=1) {
    let oNumero = numeros[index];
    for(let index2 = 1; index2 < numeros.length; index2 +=1) {
      if(oNumero === numeros[index2]) {
          numeroContado += 1;
      }
    }
    if(numeroContado > numeroRepetido ) { // se o numero contado for maior que o numero repido
      numeroRepetido = numeroContado; // o numero repetido vai passar a ser o maior
       indexRepetido = index; // e o index que tiver o numero que mais se repetiu vai passar a ser ele.
    }
    numeroContado = 0; // se a condição for falsa o numero contado é zerado e o loop se reinicia.
  }
  return numeros[indexRepetido];
}

console.log(apareceMais([2, 3, 2, 5, 8, 2, 3]));
console.log(apareceMais([1, 9, 4, 1, 1, 3, 4]));
console.log(apareceMais([2, 3, 2, 5, 8, 2, 9, 9, 9, 9, 1, 4, 3, 2, 3]));