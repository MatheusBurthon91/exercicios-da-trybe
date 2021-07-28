// vamos tentar de novo...

// variavel é um tipo de dado que armazena um valor! este valor pode ser numero, string, booleano, indefinido ou nulo
// let é como se declara a variavel, depois vem o nome, e você atribui a ela um valor, no caso acima é string(caracteres)
let frase = 'Hello world'; //string literal
console.log(frase);
let numero = 29; // number literal
console.log(numero);
let sim = true; // booleano
console.log(sim)
let cidade; // undefined
console.log(cidade)
let cor = null; // nulo
console.log(cor);
// as variaveis undefined pode ser atribuida com um novo valor, ou você pode negar ela para que a função ocorra, assim
// como a variavel nula que pode ser reatribuida a qualquer hora, além de ser negada.
// isso no caso são os tipos primitivos;
let animal = 'arara';
// lembrando que uma variavel pode ser reatribuida
// console.log(animal);
animal = 'cachorro';
// a const por outro lado não pode mudar, pois claro como diz o nome é uma constante!
const nome = 'Matheus';
console.log(nome);
const birthCity = 'Salvador';
console.log(birthCity);
const birthYear = 1991;
console.log(birthYear);
// se mudar a constante nome vai dar um erro
// nome = 'José'; console.log(nome); output => TypeError: Assignment to constant variable.
// existe um comando que é possivel saber o tipo de variavel é passado pelo javascript que é o 'typeof';
let fraseCompleta = 'Dragon Ball é um anime classico!';
console.log(typeof(fraseCompleta));
let numeroInteiro = 29;
console.log(typeof(numeroInteiro));
let casado = false;
console.log(typeof(casado));
let musica;
console.log(typeof(musica));
let newColor = null;
console.log(typeof(newColor)); // duvida posterior, pois retorna um objeto
// uma das varias de se interagir com o javascript é que é possivel fazer operações aritmeticas

let salario = 4000;

console.log(salario + salario); // soma
console.log(salario - salario); // subtração
console.log(salario * salario); // multiplicação
console.log(salario / salario); // divisão
console.log(salario ** 4); // exponenciação
// existem outras formas de operação no javascript como saber se aquele numero é divisivel por um determinado numero
// além de incrementar ou decrementar valores
let dez = 10
console.log(dez % 2);
console.log(dez % 3);
// como foi visto que se o dez for divisivel por 2 o resto será zero e por 3 o resto será 1, dai podemos concluir 
// que se o resto da divisão for 0 o numero é divisivel por ele se não o resto será diferente de zero.
// agora podemos também decrementar ou incrementar com os seguintes sinais

dez +=1;
console.log(dez);
// outras formas de incrementar
dez = dez + 1;
console.log(dez);
dez ++;
console.log(dez);
// decrementar e suas outras formas
dez -=1;
dez = dez - 1;
dez --;
console.log(dez);
// testando o typeof
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId); // number
console.log(typeof isEnrolled); // boolean
console.log(typeof patientInfo); // objetc
console.log(typeof patientEmail); // string

// exercicio de fixação aritmetico

// Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
let base = 5;
let altura = 8;
/* Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. 
Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!*/
let area = base * altura;
console.log('a area é: ' + area);
// Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;
let perimetro = (2 * base) + (2 * altura);
console.log('o perimetro é: ' + perimetro);

// As condicionantes: é possivel determinar se alguma ação será ou não será executada, além de determinar varias condições
// que e uma delas será executade uma vez e são com a estrutura: if(se), else(senão) se só tiver duas condições, se tiver
// mais de duas pode colocar else if(se senão), os exemplos estão logo abaixo.

// operadores logicos: os operadores logicos servem para fazer comparações, e essas comparações vão ajudar o programador
// a comparar o codigo, essas comparações farão a validação de condição ou não.
// os operadores são esses <, >, <=, >=, ==, ===, !=, !==, && e por ultimo ||

let idade = 18;

if (idade < 18) { // menor que
    console.log('não pode dirigir')
} else {
    console.log('pode dirigir');
}

// nesse exemplo de condição tem os seguintes operadores o || que significa ou, no caso se não tiver um pode ser o outro
// ou seja o problema pode ser resolvido de forma mais idependente, e tem o  estritamente igual que faz uma comparação
// mais profunda, ou seja ela se preocupa com o valor e a tipagem, enquanto com dois iguais ela se preocupa com o valor
// exemplos:
// 2 === 2; true =>  a tipagem e o valor é o mesmo
// 2 === '2'; false => o valor é o mesmo, mas a tipagem é diferente
// 2 == '2'; true => o valor é o mesmo
// 2 !== '2'; true; => a tipagem é direrente
// 2 != '2'; false => o valor é o mesmo
let diaDaSemana;

if(diaDaSemana === 'segunda-feira' || diaDaSemana === 'terça-feira' || diaDaSemana === 'quarta-feira'
|| diaDaSemana === 'quinta-feira') {
    console.log('trabalhando normal');
} else if(diaDaSemana === 'sexta-feira') {
    console.log('MUFASA!! hoje é dia de maldade!!')
} else {
    console.log('fim de semana, vamos todo mundo recuperar as energias');
}

let horario;
// outros operadores agora abaixo >=(maior igual), e o && deixa o codigo mais dependente <= (menor igual), <(maior)
if (horario >= 14 && horario < 14.40) {
    console.log('momento inicial da trybe');
} else if ( horario >= 14.40 && horario < 16.30) {
    console.log('horario de estudo assincrono');
} else if (horario >= 16.30 && horario < 18) {
    console.log('aula ao vivo');
} else if (horario >= 18 && horario < 19.30) {
    console.log('mentoria(horario facultativo)');
} else if (horario >= 19.30 && horario < 19.40) {
    console.log('horaio de preencher o forms(feedbacks)');
} else if (horario >= 19.40 && horario <= 20) {
    console.log('fechamento');
} else {
    console.log('horário livre, utilize ele com sabedoria');
}
// fazer um algoritomo que imprima a mensagem se uma pessoa foi aprovada, lista de espera ou reprovada.

// Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, 
// e atribua a ela um valor entre 1 e 100;
let nota = 99;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. 
// Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores 
// lógicos que se aplicam a cada situação.
if (nota >= 80) {
    console.log('Parabéns, foi aprovada(o)!');
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovada(o)');
}
// Altere o valor da nota para verificar se as condições que você implementou funcionam;

// Existe outra forma de fazer comparações no javascript, embora seja pouco preferida pelos programadores, ela se chama
// swicth - case ela funciona da seguinte maneira.

let sinalDeTransito = 'roxo';

switch (sinalDeTransito) {
    case 'vermelho':
        console.log('Pare!');
        break;
    case 'amarelo':
        console.log('Atenção!');
        break;
    case 'verde':
        console.log('siga em frente!');
        break;
    default:
        console.log('Erro parâmetro inesperado');
}
// exercicio de fixação!
// faça o mesmo exercicio do aprovado acima com o switch case, com as mesmas mensagens do exercicio anterior 
// e se o paramentro não se aplicar a nenhum case retorne a mensagem não se aplica

// declara uma variavel chamava situação que vai conter a situação escolar.

let situacao = 'recuperação';

switch(situacao) {
    case 'aprovado':
        console.log('Parabéns!! você foi aprovada(o)!');
        break;
    case 'lista':
        console.log('Você está na lista de espera')
        break;
    case 'reprovado':
        console.log('você foi reprovada(o)')
        break;
    default:
        console.log('não se aplica.')
}
// outros operadores que podem ser usados!
// logica not '!', ele nega o que é passado
if(!false) {
    console.log(true);
}
// outras formas de incrementar como foi visto, o programador pode aumentar numero, ou decrescer numero com mais e menos
// o fato é que pode também incrementar ou decremetar com divisão ou multiplicação
let number = 20;
number *= 2;
console.log(number);
let otherNumber = 40;
otherNumber /= 2;
console.log(otherNumber);
// existe também o operador ternario que faz o mesmo trabalho do if e else, mas em menos linhas, o simbole é: '?'.

let funnyNumber = 8;

funnyNumber % 2 === 0 ? console.log(true) : console.log(false);

let nulo = null;
console.log(typeof nulo);
let indefinido;
console.log(typeof indefinido);