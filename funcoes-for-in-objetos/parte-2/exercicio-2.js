/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
 */

function acharOMaiorIndice(array) {
  let maiorIndice = 0;
  for(let indice in array) {
      if(maiorIndice < array[indice]) {
          maiorIndice = indice;
      }
  }
  return maiorIndice;
  }
  console.log(acharOMaiorIndice([2, 3, 6, 7, 10, 1]));
  console.log(acharOMaiorIndice([1, 2, 3]));
  console.log(acharOMaiorIndice([1, 2, 3, 9]));
  console.log(acharOMaiorIndice([1, 2, 3, 11, 0, 13]));  