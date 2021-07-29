
// questão 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let novosNumeros = [];
for(let index = 1; index < 26; index +=1) {
    novosNumeros.push(index / 2);
}
console.log(novosNumeros);