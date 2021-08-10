/* Os objetos são varaveis que agrupam outras variaveis funcionando como um enorme container para caisas menores
um objeto pode guardar variaveis do tipo string, numeros, booleanos, indefinidos, nulos, e ainda pode guardar variaveis 
mais complexas como arrays e outros objetos, então abaixo vai estar a anatomia de um objeto */

const people = {
  name: 'Danila',
  lastName: 'Pessoa',
  nickName: 'Dani',
  single: true,
  age: 31,
  formacao: ['Jornalista', 'Tecnica em administação'],
  bornInfo: {
      city: 'Salvador',
      state: 'Bahia',
      country: 'Brasil'
  }
};

// obs: coloquei um obejto numa const, mas pode ser uma string

/* note que com algumas informações foram agrupadas em uma só variavel e elas são de diferentes tipos que são strings,
booleanos, numeros e array de strings*/

// pode-se acessar as propridades do objeto para iteragir com elas e são da seguinte forma
console.log('Meu nome é ' + people.name + ' ' + people.lastName + ' e minha idade é ' + people.age);
// e tem outra forma
console.log('Meu nome é ' + people['name'] + ' ' + people['lastName'] + ' e minha idade é ' + people['age']);
// as duas são aceitas, mas segunda é muito utilizada para criar propriedaes novas, por exemplo vou juntar nome e sobrenome
// em uma só propriedade.
people['fullName'] = people.name + ' ' + people.lastName;
console.log(people);
console.table(people);
// como foi falado e agora adicionado um objeto dentro de um objeto podemos agora acessar as propriedades dele
console.log('Eu nasci na cidade de ' + people.bornInfo.city + ' no estado da ' + people.bornInfo.state + ' no ' + people.bornInfo.country);

// para fixar o conteudo

// crie um objeto chamado player

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
      golden: 2, 
      silver: 3 
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
// acesse as chaves do objeto que devem ser impressar no console. as informações são nome, sobrenome e idade
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
// adicionado um array que foi pedido dos anos que a jogadora foi a maior do mundo
// acesse a chave bestInTheWorld e concatene com a frase "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes nos anos de ' + player.bestInTheWorld);
/*Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas 
de prata". */
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// agora vamos conhecer o laço de repetição for/in

/* O laço de repetição for/in trabalha de maneira muito semelhante do for tradicional, basicamente ele também iterage com
os indices do array e do objeto, os exemplos estão logo abaixo */

let colors = ['red', 'blue', 'black', 'gray', 'white', 'cyan'];
for(let color in colors) {
  console.log(color);
}
// agora vamos pegar os valores do array com o for/in
let numbers = ['one', 'two', 'three', 'four', 'five'];
for(let number in numbers) {
  console.log(numbers[number]);
}
// agora veremos os valores com os objetos

let anime = {
  nome: 'Bleach',
  genero: 'shounen',
  anoDeEstreia: 2004
};

for(let posicao in anime) {
  console.log(posicao);
}

// agora imprimindo as informações de valores

let anime2 = {
  nome: 'One Piece',
  genero: 'shounen',
  anoDeEstreia: 1999
};

for(let position2 in anime2) {
  console.log(anime2[position2]);
};

// você pode também imprimir a chave de onde está o valor, e o valor do objeto

let anime3 = {
  nome: 'Gintama',
  genero: 'shounen',
  anoDeEstreia: 2006
};
for(let position3 in anime3) {
  console.log(position3 + ':', anime3[position3]);
}

//                                          *******o for/in e o for/of*******

/* como já foi mencionado o apesar de serem parecidos os dois tem um uma finalidade diferente, enquanto o for/ of vai
direto nos valores do objeto e do array, enquanto o for/in vai sobre os indices, veja os exemplos abaixo */

let arrayOfNumbers = [1, 2, 3, 4, 5];
for(let number in arrayOfNumbers) {
  console.log(number); // indices => 0 1 2 3 4
}

let newArrayOfNumbers = [1, 2, 3, 4, 5];
for(let number of newArrayOfNumbers) {
  console.log(number); // valores => 1 2 3 4 5
}

//                                                *******exercicios de fixação******* 

/*Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo 
o xxxxx pelo nome em questão. */

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let name in names) {
  console.log('Olá ' + names[name]);
}

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let indice in car) {
  console.log(indice + ': ', car[indice]);
}

// funções

/* As funções tem uma grande importancia pois elas agrupam codigos e quem responsabilidades, e para fazer codificações
de maneira correta, abaixo veja um exemplo basico de função e também veja a sua estrutura*/

function soma(a,b) {
  return a + b;
}

console.log(soma(1, 2));
console.log(soma(3, 4));
/* como foi visto a codificação da função funciona dessa forma declara ela chamando function, depois nome-a ela, e coloca
os parenteses depois do nome da função, apos isso vem os parametros, lembrando que a função pode vim ser parametros, den-
tro do escopo você faz a codificação que pede e depois retorna o que se deseja, para executar em um comando é preciso
invoncar a função que foi declarada desse jeito será visto se os codigos funcionam ou não de maneira correta e lembrando
que pode se fazer com inumeros codigos colocando numeros diferentes para teste */

// exemplo

// agora veremos um exemplo do video da aula dos processos seletivos da trybe, função de carro

// o carro deve ligar e desligar
// o estado inicial do carro será desligado, não será passado nenhum parametro;
let carro = 'desligado';
function ligaEDesligaCarro() {
  if(carro === 'desligado'){
      carro = 'ligado';
  } else {
      carro = 'desligado';
  }
  return carro;
}

// deve avançar e reduzir a velocidade
let aceleracao = 0;
function acelerar(aumentar) {
  aceleracao = aceleracao + aumentar;
  return 'Acelerando a ' + aceleracao + ' m/s²';
}

function  reduzir(decrementar) {
  aceleracao = aceleracao - decrementar;
  return 'Reduzindo a ' + aceleracao + ' m/s²';
}
// deve ligar e acender farol
let farol = 'apagado';
function acenderEDesligarOFarol() {
  if(farol === 'apagado') {
      farol = 'aceso';
  } else {
      farol = 'apagado';
  }
  return farol;
}
// deve rodar volante para esquerda e direita
let volante = 0;
function girarVolante(anguloDeRotacao) {
  volante = anguloDeRotacao;
  if(volante > 0) {
      return volante + '° direita';
  } else if(volante < 0) {
      return volante + '° a esquerda';
  } else {
      return volante + '° reto';
  }
}
// agora vamos ver se as funçoes estão funcionando de maneira correta, invocando elas
console.log(ligaEDesligaCarro());
console.log(acenderEDesligarOFarol());
console.log(acelerar(25));
console.log(girarVolante(45));
console.log(girarVolante(0));
console.log(reduzir(5));
console.log(girarVolante(-25));
console.log(girarVolante(0));
console.log(reduzir(20));
console.log(acenderEDesligarOFarol());
console.log(ligaEDesligaCarro());