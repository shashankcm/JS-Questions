/*
let array = [[1,2,3], [4,5,6], [7,8,9]];

let len = array.length;

let total = array.reduce((add, el, i, arr) => {
  console.log(add, el, len, el[i], el[len-i-1])
  return add+el[i] + el[len-i-1]
}, 0)

console.log(total) */

function addTwoDigits(n) {
  
  let val = [...n + ""];
  
  return val.reduce((prev, curr) => Number(prev) + Number(curr), 0)
}

console.log(addTwoDigits(29))