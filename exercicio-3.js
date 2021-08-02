let n = 5;
let base = n;
let line = '';
let hastag = '#';
let control = base - 1;

  for(let indexLine = 0; indexLine < n; indexLine +=1) {
    for(let indexColuna = 0; indexColuna < n; indexColuna +=1) {
      if(indexColuna < control) {
        line += ' ';
      } else {
        line += hastag;
        
      }
    }
    console.log(line);
    control -= 1;
    line = '';
    
  }