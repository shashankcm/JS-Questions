function almostIncreasingSequence(sequence) {
  let c1 = 0, c2 = 0, t1 = sequence[0], t2 = sequence[sequence.length - 1], j = sequence.length - 1;
  
  for(let i = 1; i < sequence.length; i++ ) {
      if(t1 >= sequence[i]){
          c1 += 1
      } else {
          t1 = sequence[i]
      }
      
      if(t2 <= sequence[j-1]){
          c2 += 1
      } else {
          t2 = sequence[j-1]
      }
      j--
  }
  
  if(c1 <=1 || c2 <= 1) {
      return true
  }
  
  return false
}

/*
Input:
sequence: [1, 3, 2, 1]
Expected Output:
false

Input:
sequence: [1, 3, 2]
Expected Output:
true

*/