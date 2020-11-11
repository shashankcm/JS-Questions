// Solution - 1

/*function rotateArr(arr, target) {
  let i = 0;
  
  while( i < target) {
    arr.unshift(arr.pop());
    i++
  }
  
  return arr;
} */

// Solution - 2 

function rotateArr(arr, target) {
  if(arr.length > target) {
    arr.unshift(...arr.splice(-target))
  } else {
    let i = 0;
    while( i < target) {
    arr.unshift(arr.splice(-1));
    i++
  }
  }
  
  return arr
}

console.log(rotateArr([1,2,3,4,5,6,7], 3))