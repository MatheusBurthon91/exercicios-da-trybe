console.log('hello world');
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerText = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// colocar os dias no calendario
function criarListaDias() {
const tagDaListaDias = document.querySelector('#days');
for(let index = 0; index < dezDaysList.length; index +=1) {
  let day = dezDaysList[index];
  let listaDias = document.createElement('li');
  if (day === 4 || day === 11 || day === 18) {
    listaDias.classList = 'day friday';
    listaDias.innerText = day;
    tagDaListaDias.appendChild(listaDias);
  } else if(day === 24 || day === 31) {
    listaDias.classList = 'day holiday';
    listaDias.innerText = day;
    tagDaListaDias.appendChild(listaDias);
  } else if(day === 25) {
    listaDias.classList = 'day holiday friday';
    listaDias.innerText = day;
    tagDaListaDias.appendChild(listaDias);
  } else {
    listaDias.classList = 'day';
    listaDias.innerText = day;
    tagDaListaDias.appendChild(listaDias);
  }
 }
}

criarListaDias();

function criarBotãoDoFeriado(feriado) {
  let containerDoBotao = document.querySelector('.buttons-container');
  let botaoFeriado = document.createElement('button');
  botaoFeriado.id = 'btn-holiday';
  botaoFeriado.innerText = feriado;
  containerDoBotao.appendChild(botaoFeriado);
}
criarBotãoDoFeriado('Feriados!');



let ResgateButtonFeriado = document.querySelector('#btn-holiday');
let body = document.querySelector('body');
let style = window.getComputedStyle(body, null).getPropertyValue("background-color");
function trocarCorDosFeriados() {
  let elementosFeriados = document.querySelectorAll('.holiday');
  for(let index = 0; index < elementosFeriados.length; index +=1) {
    if(elementosFeriados[index].style.backgroundColor === style) {
      elementosFeriados[index].style.backgroundColor = 'blue';
    } else {
      elementosFeriados[index].style.backgroundColor = style;
    }
  }
}
ResgateButtonFeriado.addEventListener('click', trocarCorDosFeriados);

function criarBotãoDaSextaFeira(sextaFeira) {
  let containerDoBotao = document.querySelector('.buttons-container');
  let botaoSextaFeira = document.createElement('button');
  botaoSextaFeira.id = 'btn-friday';
  botaoSextaFeira.innerText = sextaFeira;
  containerDoBotao.appendChild(botaoSextaFeira);
}
criarBotãoDaSextaFeira('sexta-feira!!');

regasteiBotaoSextaFeira = document.querySelector('#btn-friday');

function mudarLetraDoDiaDaEsbornia() {
  let diaDaEsbornia = document.querySelectorAll('.friday');
  let arrayDeSextas = [4, 11, 18, 25];

  for(let index = 0; index < diaDaEsbornia.length; index +=1) {
    if(diaDaEsbornia[index].innerText !== 'MUFASA!!') {
      diaDaEsbornia[index].innerText = 'MUFASA!!'
    } else {
      diaDaEsbornia[index].innerText = arrayDeSextas[index];
    }
  }
}
regasteiBotaoSextaFeira.addEventListener('click', mudarLetraDoDiaDaEsbornia);

function aumentarLetra(event) {
  console.log(event.target)
  event.target.style.fontSize = '35px';
}

function diminuirLetra(event) {
  console.log(event.target)
  event.target.style.fontSize = '20px';
}

let recuperarElemetentosDias = document.querySelectorAll('.day');
for(let index = 0; index < recuperarElemetentosDias.length; index +=1) {
  let dia = recuperarElemetentosDias[index];
  dia.addEventListener('mouseover', aumentarLetra);
  dia.addEventListener('mouseout', diminuirLetra);
  // dia.addEventListener('click', pegarEstiloDaClasse);
}

function criarTarefa(tarefa) {
  let tasks = document.querySelector('.my-tasks');
  let trabalhosParaFazer = document.createElement('span');
  trabalhosParaFazer.classList = 'minha-tarefa';
  trabalhosParaFazer.innerText = tarefa;
  tasks.appendChild(trabalhosParaFazer);
}
// você vai ter que chamar essa função depois provavelmente em um evento
criarTarefa('academia');

function criarLegendaDeCor(cor) {
  let tasks = document.querySelector('.my-tasks');
  let criarDivDaLegenda = document.createElement('div');
  criarDivDaLegenda.classList = 'task';
  criarDivDaLegenda.style.backgroundColor = cor;
  tasks.appendChild(criarDivDaLegenda);
}
criarLegendaDeCor('red');

// agora é preciso adicionar a classe selected

const removerOuAddSelected = (event) => {
  const evento = event.target;
  const divCor = document.querySelector('.task');

  if(!divCor.classList.contains('selected')){
    evento.classList.add('selected')
  } else {
    evento.classList.remove('selected');
  }
}

resgatagaDivCor = document.querySelector('.task');
resgatagaDivCor.addEventListener('click', removerOuAddSelected);

// agora quando tiver a classe selected deve-se clicar em um dia do calandario e adicionar a cor
// que estiver com a classe selected.
// function pegarEstiloDaClasse(event) {
//   const pegarSelected = document.querySelector('.selected');
//   let estilo  = window.getComputedStyle(pegarSelected, null).getPropertyValue("background-color");
//   // if(style) {
//     if(!estilo) {
//       event.target.style.color = estilo;
//     } else {
//       event.target.style.color = style;
//     }
//   // } else {
//   //   event.target.style.color = 'rgb(119,119,119)';
//   // }
// }
// agora vamos criar os compromissos do mês no caso vamos acrescentar tag's no html

// o evento acontecerá em um botão que já está implementado então devemos resgatar

// a função deve pegar o valor do input e transforma-lo em li no html

const addCompromisso = () => {
  const listaDesordenada = document.querySelector('.task-list');
  const resgateiInput = document.querySelector('#task-input');
  const criarLi = document.createElement('li');
  criarLi.classList = 'compromisso';
  criarLi.innerText = resgateiInput.value;
  if(resgateiInput.value === '') {
    alert('Erro! digite um compromisso');
  } else {
    listaDesordenada.appendChild(criarLi);
  }
  resgateiInput.value = '';  
}

const pegarBotaoCompromisso = document.querySelector('#btn-add');
pegarBotaoCompromisso.addEventListener('click', addCompromisso);


// const removerCompromisso = () => {
//   const listaDesordenada = document.querySelector('.task-list');
//   const tarefas = document.querySelectorAll('.compromisso');
//   for(let index = 0; index < tarefas.length; index +=1) {
//     const aTarefa = tarefas[index];
//     listaDesordenada.removeChild(aTarefa);
//   }
// }


const pegarBotaoRemover = document.querySelector('#btn-remove');
pegarBotaoRemover.addEventListener('click', () => {
  const listaDesordenada = document.querySelector('.task-list');
  const tarefas = document.querySelectorAll('.compromisso');
  for(let index = 0; index < tarefas.length; index +=1) {
    const aTarefa = tarefas[index];
    listaDesordenada.removeChild(aTarefa);
  }
});

// resgate o botão para savar os compromissos

let compromisso = document.querySelector('.task-list');
function mandarLocalStorage() {
    localStorage.setItem('tarefas', compromisso.innerText);
  }

const pegarBotaoSalvar = document.querySelector('#btn-save');
pegarBotaoSalvar.addEventListener('click', mandarLocalStorage);


function mostrarTarefa() {
  compromisso.innerText = localStorage.getItem('tarefas');
}
window.onload = mostrarTarefa();
