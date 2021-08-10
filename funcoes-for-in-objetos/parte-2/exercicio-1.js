// exercicios de funções do bloco 4.4

/*
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/
// palindromo é uma palavra de é igual de trás pra frente: ovo, por exemplo

function verificaPalindromo(palavra) {
  let palavraInverse = palavra.split('').reverse().join('');
  return palavra === palavraInverse ? true : false;
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));