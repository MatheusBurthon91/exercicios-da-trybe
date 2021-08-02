let n = 5;                                                      
let asterisco = '*';
let linha = '';
let pontoDoMeio = (n + 1) / 2;
let controleDireito = pontoDoMeio;
let controleEsquero = pontoDoMeio;
    for(let indexDaLinha = 0; indexDaLinha <= pontoDoMeio; indexDaLinha +=1) {
        for(let indexDaColuna = 0; indexDaColuna <= n; indexDaColuna +=1) {
            if(indexDaColuna > controleEsquero && indexDaColuna < controleDireito) {
                linha += asterisco;
            } else {
                linha += ' ';
            }
        }
        console.log(linha);
        linha = ' ';
        controleDireito += 1;
        controleEsquero -= 1;
}
/*
n = 5

  *
 ***
*****
*/