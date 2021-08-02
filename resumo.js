// Logica de programação e algoritmos

/*
Para que seja executado os programas é necessário seguir uma logica, essa logica vai ser determinante para resolver os
problemas que uma pessoa desenvolvedora lida nos dias de estudo e trabalho.

Na hora que escrevemos um problema, palavra por palavra, codigo por codigo, tudo deve ser entendido e transmitido para o
programa, cliente e claro outros desenvolvedores, Ou seja na ordem que está escrita o algoritmo para o computador é de
extrema importancia para que o programa seja executado de forma correta. e para que o computador execute essa logica surgem
os algoritmos que vão suprir a demanda. Abaixo está uma tarefa corriqueira do dia-a-dia comum de uma pessoa.
*/

//                                                  ***algoritmo de beber o leite***
/*
Pegar um copo
Colocar o copo em cima da mesa
Abrir a porta da geladeira
Pegar o leite
Fechar a porta da geladeira
Colocar determinada quantidade de leite no copo
Abrir o armário
Pegar o achocolatado
Fechar a porta do armário
Colocar determinada quantidade de achocolatado no copo
Pegar uma colher
Mexer no copo com a colher
*/

// nota-se que para realizar a tarefa comum é necessário tantos passos, e como um ser humano não notamos o trabalho que é

// Outro algoritmo será montado por mim, vestir-se para ir para um festa.

/*
Ir para o banho
Entrar no Box para tomar o banho
Ligar a ducha
Lavar-se
Desliga a ducha
Passa Sabão
Liga de novo a Ducha
Lava o corpo
Desliga o chuveiro
Pega a toalha
Sai do box
Se enxuga
Vai para o seu quarto
Abre o seu armario
Escolhe uma calça legal
Escolhe uma camisa legal
Fecha a porta do armario
Abre a gaveta de cuecas
Escolhe uma cueca
Fecha a gaveta de cuecas
Veste a cueca
Vesca a calça
Veste a camisa
Pega o seu sapato
Vai para a gaveta de meias
Abre a gaveta de meias
Escolhe a meia
Fecha a gavetas de meias
Veste a meia
Coloca o sapato
FIM.
*/

/*
Como foi visto acima, você fazer no real é menos cansativo que no computador, pois deve-se lembrar de etapa por etapa
e algo que na vida real fazemos de forma incosciente o computador precisa de instruções diretas e na ordem certao que
não quer dizer que não dá pra inverter a ordem de algumas tarefas para chegar no mesmo resultado, pois por exemplo,
é possivel pegar as meias antes de pegar o sapato, e o resultado será o mesmo, isso é a programação um outro caminho pode
ser usado para chegar no mesmo resultado, mas é claro que siga uma ordem logica.
*/

// agora vamos fazer um programa que até ja foi feito, mas agora vamos olhar pra ele com mais cuidado e ir definindo
// passo a passo. O problema será somar os valores de um determinado array

// analise o problema
let numeros = [1, 3, 4, 8, 2, 9, 7];
// ele quer somar os elementos de um array, e essa soma precisa ficar em algum lugar por isso é bom criar uma variavel
let soma = 0; // essa variavel vai conter nada, pois é preciso está com zero para não atralhar a contagem do array
// agora é preciso percorrer o array por isso usa-se o loop

for(let contador = 0; contador < numeros.length; contador +=1) {
    // agora é preciso somar todos os numeros que estão no array numeros
    soma += numeros[contador]; 
    // nessa estrutura vai ser adicionado cada numeros que está na posição contador cada vez
    // que o loop do 'for' for executado
}
// no final você retorna ele imprimindo o seu valor
console.log(soma);
// FIM DO ALGORITMO.

/* como o que foi feito acima, planejando etapa por etapa, quebrando um problema maior em menores e resolvendo eles 
primeiro fica mais facil de trabalhar para desenvolver os codigos, o nome disso se chama baby steps ou em portugês passos
de bebê */

// Outro algoritmo

/*Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. 
Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":*/
let fruits = [3, 4, 10, 1, 12];
// analise o problema...

// pediu para percorrer o array, somando todos os valores ou seja vai ter uma variavel para armazenar a soma dos elementos
let sum = 0;
// aproveitando como foi pra percorrer lembra o loop
for(let index = 0; index < fruits.length; index += 1) {
    // no loop você armazena a soma dos elementos do array
    sum += fruits[index];
}
// caso lembra uma condição if
// se for tal numero imprama-o
if(sum > 15) {
    console.log(sum);
} else {
    // se não for tal numero imprima uma mensagem
    console.log('valor menor que 16');
}
// FIM DO ALGORITMO.