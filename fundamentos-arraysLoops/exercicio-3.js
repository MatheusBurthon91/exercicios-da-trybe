// questão 3 - calcule e imprima a media aritmetica do array numbers
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for(let number of numbers) {
    soma += number;
    media = soma / numbers.length;
}
console.log(media);