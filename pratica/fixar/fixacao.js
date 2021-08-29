const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? feito

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; feito

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; feito

Segue abaixo um exemplo do uso de event.target:
*/

// criar a função que precisa trocar os eventos
function trocarEvento(evento) {
  let mover = evento.target;
  let techs = document.querySelector('.tech');
  techs.classList.remove('tech');
  mover.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', trocarEvento);
secondLi.addEventListener('click', trocarEvento);
thirdLi.addEventListener('click', trocarEvento);


// preciso digitar o texto e esse texto deve ser computado na div que tem a classe selected selecionada


function colocarOTexto(evento) {
  let theTechs = document.querySelector('.tech');
  theTechs.innerHTML = evento.target.value;

}

input.addEventListener('input', colocarOTexto);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  const eventos = event.target
  eventos.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

let titulo = document.querySelector('#mySpotrybefy');


function redirecionar() {
  window.location.assign('https://www.youtube.com/');
}

titulo.addEventListener('dblclick', redirecionar)

function mudarCorDoTitulo() {
  titulo.style.color = 'blue';
}
titulo.addEventListener('mouseover', mudarCorDoTitulo);

function mudarDeVoltaACor() {
  titulo.style.color = 'white';
}
titulo.addEventListener('mouseout', mudarDeVoltaACor);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.