
// declare uma variavel chamada porcentagem e retorna A, B, C, D, E e F para as sequintes condições

/*
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/

let porcentagem = 95;

if (porcentagem > 100 || porcentagem < 0) {
    console.log('Erro!')
} else if (porcentagem >= 90) {
    console.log('A');
} else if (porcentagem >= 80) {
    console.log('B');
} else if (porcentagem >= 70) {
    console.log('C');
} else if (porcentagem >= 60) {
    console.log('D');
} else if (porcentagem >= 50) {
    console.log('E');
} else {
    console.log('F');
}