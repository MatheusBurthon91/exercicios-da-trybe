/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo:
n = 5

*
**
***
****
*****

*/

// para o segundo exercicio é necessário fazer com que se faça uma escada do pro lado direito, terá uma base igual a n
// e vai subtraindo menos - 1.

// primeiro declara as variaveis iniciais que vão ser utilizadas na questão.

let n = 8;
let asteriscos = '*';
// para armazenar esses asteriscos vamos ter que concatenar no loop uma string vazio
let linha = '';

// para fazer essa tarefa de asteriscos consecutivas é preciso usar o for
for(let index = 0; index < n; index +=1) {
    // agora a cada loop é preciso concatenar os asteriscos na linha
    linha += asteriscos;
    // agora para mostrar esse resultado a cada passagem do loop usa-se o console.log
    console.log(linha);
}