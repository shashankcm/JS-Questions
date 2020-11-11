
var flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a;

var deepFlatten = (arr, depth = 1) => {
   return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? deepFlatten(val, depth - 1) : val), [])
                : arr.slice();
}

console.log(deepFlatten([0, 1, 2, [[[3, 4]]]], Infinity))