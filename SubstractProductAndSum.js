/*
  Input = 234
  Output = 15;

  explanation:  
  sum = 2 + 3 + 4 = 9, product = 2*3*4 = 24 => product (24) - sum (9) = 15 
*/

function substractProductAndSum(num) {
  let output = 0, sum = 0, product = 1;

  while(num > 0) {
    const current = num % 10;
    sum += current;
    product *= current;
    num = Math.floor(num/10);
  }

  output = product - sum;

  return output;

}

console.log(substractProductAndSum(234))