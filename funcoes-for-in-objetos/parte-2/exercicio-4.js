/*4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

function pegarMaiorNome(array) {
  let maiorNome = '';
  for(let position in array) {
      if(maiorNome.length < array[position].length) {
          maiorNome = array[position];
      }
  }
  return maiorNome;
}
console.log(pegarMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));