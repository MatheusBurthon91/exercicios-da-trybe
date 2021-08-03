/*7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false */

function verificaFimDePalavra(palavra, fimDePalavra) {
  let primeiraPalavra = palavra.split('').reverse().join('');
  let ultimaPalavra = fimDePalavra.split('').reverse().join('');

  for(let index = 0; index < primeiraPalavra.length; index +=1) {
      if(primeiraPalavra[index] === ultimaPalavra[index]) {
        return true;
      } else {
        return false;
      }
  }
}
console.log(verificaFimDePalavra('trybe', 'be'));
console.log(verificaFimDePalavra('joaofernando', 'fernan'));

let string1 = 'trybe';
let string2 = 'be';
console.log(string1.endsWith(string2));

function finalPalavra(palavra, fimDePalavra) {
  return palavra.endsWith(fimDePalavra);
}
console.log(finalPalavra('trybe', 'be'));
console.log(finalPalavra('joaofernando', 'fernan'));