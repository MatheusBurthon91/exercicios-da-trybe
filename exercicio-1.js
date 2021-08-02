// para esse exercicio de logica de programação imprima esses asteriscos de maneira igual de largura e altura, e n deve
// ser maior que 1. => n > 1.

/*

n = 5

*****
*****
*****
*****
***** 

*/

// analise o problema

// é preciso ter um numero pra dar uma partida
let n = 5;
// O n vai ser o numero que vai partir a estrutura
let asterisco = '*'
// para armazenar as strings que serão multiplicadas
let linha = '';
// para percorrer a estrutura é necessário fazer um for
for(let index = 0; index < n; index +=1) {
    // agora é preciso concatenar os os asteriscos na string vazia
    linha += asterisco;
}
// quando imprime dentro do primeiro for imprime só a coluna de cinco linhas, para imprimir mais as colunas é necessário 
// colocar as linhas em outro loop
for(let index = 0; index < n; index +=1) {
    console.log(linha);
}