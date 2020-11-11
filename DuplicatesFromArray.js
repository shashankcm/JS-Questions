/*function uniqueValues(arr) {
  const seen = {}
  return arr.filter(item => {
    return seen.hasOwnProperty(item) ? false : seen[item] = true
  })
} */

/*
function uniqueValues(arr) {
  let uniqeArray = []
  arr.forEach((item) => {
    if(uniqeArray.indexOf(item) < 0){
      uniqeArray.push(item)
    }
  })
  return uniqeArray
} */

/* function uniqueValues(arr) {
  return arr.reduce(function(a,b) {
    if(a.indexOf(b) < 0){
      a.push(b)
    }
    return a;
  },[])
} */

/* function uniqueValues(arr) {
return arr.sort().reduce(function(a, b){ if (b != a[0]) a.unshift(b); return a }, [])
}

a = [[1,2,3], [4,5,6], [1,2,3, [0,9,8, [4,5,6]]]]
console.log(uniqueValues(a.flat(Infinity)).reverse())


var duplicates = a.flat(Infinity).reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
}, []);

console.log(duplicates)

var flatenned = a.reduce(function(a,b){ return a.concat(...b) }, []);
var flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a;

console.log(flatenned)
console.log(flatten(a))
*/

/*

// Max and Min values from Array

function arrayMin(arr) {
  return arr.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
}

function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

console.log(arrayMax([1, 2, 3, -30]), arrayMin([1, 2, 3, -1]))

// Get index of Max values in an array

//1. If you only want the first instance:

var arrayMaxIndex = function(array) {
  return array.indexOf(Math.max.apply(null, array));
};

console.log(arrayMaxIndex([1,2,7,2])); //outputs 2

//2. If you want all occurrences of the max:

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var arrayAllMaxIndexes = function(array){
    return getAllIndexes(array, Math.max.apply(null, array));
}

console.log(arrayAllMaxIndexes([1,2,7,2,7])); // outputs [2,4]

*/

//How to multiple arguments dynamically " var arr = Array.prototype.slice.call(arguments); "

/*
  How to count duplicate value in an array in javascript
  
  const uniqueCount =  ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]; 
const distribution = uniqueCount.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] | 0)+1}),{}); 
console.log(JSON.stringify(distribution,null,2));
let count = 0;
Object.entries(distribution).filter(eachObj => { 
  if(eachObj[1] > 1 ) { count += 1 }
})
console.log(count)

*/
