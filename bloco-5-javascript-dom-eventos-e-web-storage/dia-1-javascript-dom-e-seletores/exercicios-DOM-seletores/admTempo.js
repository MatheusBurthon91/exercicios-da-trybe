// console.log('hello world');

let body = document.querySelector('body');
body.style.backgroundColor = 'rgb(76,164,109)';

let tituloPrincipal = document.querySelector('h1');
tituloPrincipal.style.color = '#03dbfc';

const urgente = document.querySelector('.emergency-tasks h3');
urgente.style.color = '#4503fc';
urgente.style.backgroundColor = '#03fcad';

const urgenteENãoImportante = document.querySelector('#emercency-tasks-not-important');
urgenteENãoImportante.style.color = '#73fc03';
urgenteENãoImportante.style.backgroundColor = '#fc03e7';

const naoImportanteEUrgente = document.querySelector('.no-emergency-tasks h3');
naoImportanteEUrgente.style.color = '#e3fc03';
naoImportanteEUrgente.style.backgroundColor = '#03cefc';


const naoImportanteENaoUrgente = document.querySelector('#no-emergency-and-not-important');
naoImportanteENaoUrgente.style.color = '#03a1fc';
naoImportanteENaoUrgente.style.backgroundColor = '#6f03fc';

const corDeFundoDaSecao1 = document.querySelectorAll('section')[0];
corDeFundoDaSecao1.style.background = '#fc038c';


const corDeFundoDaSecao2 = document.querySelectorAll('section')[1];
corDeFundoDaSecao2.style.background = '#03fc35';