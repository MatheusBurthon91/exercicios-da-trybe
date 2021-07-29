// exercicio 4 - com o mesmo codigo do exercicio anterior faça uma condicionante que imprima mensagens, se a media for maior que vinte, imprima a mensagem valor
// maior que vinte, se não for imprima valor menor que vinte.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for(let number of numbers) {
    soma += number;
    media = soma / numbers.length;
}
console.log(media);
if (media > 20) {
    console.log('vamor maior que vinte');
} else if (media === 20) {
 console.log('valor igual a vinte')
}else {
    console.log('valor menor que vinte');
}