function makeArrayConsecutive2(statues) {
  /* let statuesSort = statues.sort();
  let count = 0
  
  for(let i = 0; i < statuesSort.length - 1; i++) {
      if(statuesSort[i] !== statuesSort[i+1] - 1 ) {
          count += ((statuesSort[i+1]-1) - statuesSort[i])
      }
  }
  return count */
  
  var min = Math.min(...statues)
      max = Math.max(...statues);
      
   return ((max-min) + 1) - statues.length   
}

/*
Input:
statues: [6, 2, 3, 8]
Expected Output:
3
*/