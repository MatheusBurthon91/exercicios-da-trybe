/*
6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15. 
*/

function somaDeGauss(numero) {
  let primeiroNumero = 1;
  for(let contador = 2; contador <= numero; contador +=1) {
      primeiroNumero += contador;
  }
  return primeiroNumero;
}
console.log(somaDeGauss(5));
console.log(somaDeGauss(10));
console.log(somaDeGauss(100));
console.log(somaDeGauss(20));