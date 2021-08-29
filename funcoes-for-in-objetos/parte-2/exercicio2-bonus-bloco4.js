let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let newVector = vector.flat(); // metodo que deixa o array em uma dimensão.
  let vectorPar = [];
  for(let index = 0; index < newVector.length; index += 1) {
    if(newVector[index] % 2 === 0) {
      vectorPar.push(newVector[index]);
    }
  }
  return vectorPar;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));