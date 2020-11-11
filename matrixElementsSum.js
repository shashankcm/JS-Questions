function matrixElementsSum(matrix) {
  let sum = 0;
  for(let i = 0; i < matrix.length; i++){
       for(let j = 0; j < matrix[i].length; j++){
           if(matrix[i][j] == 0 && i + 1 < matrix.length){
              matrix[i+1][j] = 0;
           }
           if(matrix[i][j] > 0)
               sum += matrix[i][j];
       }
  }
  return sum;
}

/*
  Input:
matrix:
[[0,1,1,2], 
 [0,5,0,0], 
 [2,0,3,3]]
Expected Output:
9


*/