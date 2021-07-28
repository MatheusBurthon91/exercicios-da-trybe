// fazer um programa que que passe como variavel uma peça de xadrez e imprima o que ela faz, use letra maiuscula nas peças
// isso vai fazer ter uma dificuldade maior, e não pode ter mais condicionantes. Lembrando que javascript é case sensitive

let peca = 'General de ouro';
let novaPeca = peca.toLowerCase();

switch(novaPeca) {
    case 'peão':
      console.log('anda pra frente, pode ser duas no primeiro movimento, uma nas proximas vezes, quando captura uma peça ele vai pela diagonal');
      break;
    case 'bispo':
      console.log('diagonais');
      break;
    case 'torre':
      console.log('horizontais');
      break;
    case 'cavalo':
      console.log('movimenta-se em forma de L');
      break;
    case 'rainha':
      console.log('pode-se movimentar tanto pelas diagonais e horizontas, e quantas casas quiser');
      break;
    case 'rei':
      console.log('pode se movimentar tanto pelas diagonais, quanto pelas horizontais, entretanto só uma casa');
      break;

    default:
      console.log('não se aplica');
      break;
}
