function adjacentElementsProduct(inputArray) {
  var mul = 0, prev = -Infinity;
  for(var i = 0; i < inputArray.length; i++) {
      mul = inputArray[i] * inputArray[i+1];
      if(mul > prev) {
          prev = mul
      }
  }
  
  return prev;
}

/**
 Input:
inputArray: [3, 6, -2, -5, 7, 3]
Expected Output: 21
 */