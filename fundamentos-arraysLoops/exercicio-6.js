/* questão 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a 
mensagem: "nenhum valor ímpar encontrado" */

let impar = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    }
}
if(impar) {
    console.log(impar);
} else {
    console.log('nenhum valor impar encontrado');
}