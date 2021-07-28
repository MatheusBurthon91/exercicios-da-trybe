// faça um programa que retorne o maior de três numeros;
let numero1 = 3;
let numero2 = 4;
let numero3 = 5;

if (numero1 > numero2 && numero1 > numero3) {
    console.log('O maior numero é: ' + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log('O maior numero é: ' + numero2);
} else if (numero3 > numero2 && numero3 > numero1) {
    console.log('O maior numero é: ' + numero3);
}