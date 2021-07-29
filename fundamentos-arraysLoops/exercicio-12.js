/* Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array
   numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) 
   e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), 
   e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .
    O resultado deve ser o array abaixo:*/

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    // declara um array que será vazio para receber um novo array
    // depois fazer um loop para percorrer o array numbers
    // a cada item do array será multiplicado pelo proximo item do array
    // quando chegar no ultimo o item será multplicado por dois
    let multiplyNumber = [];
    for(let index = 0; index < numbers.length; index +=1) {
        if(index + 1 < numbers.length) {
            multiplyNumber.push(numbers[index] * numbers[index + 1]);
        } else {
            multiplyNumber.push(numbers[index] * 2);
        }
    }
    console.log(multiplyNumber);
    // fim do algoritmo
    
    // resultado esperado: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]