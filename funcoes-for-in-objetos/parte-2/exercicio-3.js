/*  
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/
function acharMenorIndice(array) {
  let menorIndice = 0;
  for(let position in array) {
      if(menorIndice > array[position]) {
          menorIndice = position;
      }
  }
  return menorIndice;
}
console.log(acharMenorIndice([2, 4, 6, 7, 10, 0, -3]));
console.log(acharMenorIndice([4, 3, 2, 5, 1, 7, -1, 2, -2, 4, -9, 20]));