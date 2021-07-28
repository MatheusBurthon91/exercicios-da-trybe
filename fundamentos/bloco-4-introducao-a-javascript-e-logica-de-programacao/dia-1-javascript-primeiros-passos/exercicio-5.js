// fazer um programa que vai ter um programa que vai conter três variaveis, essas variaveis são ser a soma de três angulos
// internos são iguais á 180, retorne true se a soma dos angulos for positiva e falso se tiver algum angulo invalido(negativo).

let angulo1 = 80;
let angulo2 = 9;
let angulo3 = 60;

let soma = angulo1 + angulo2 + angulo3;

if(soma === 180) {
    console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0 || soma !== 180) {
    console.log(false);
}