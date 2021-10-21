/*
[[true,false,false,true], 
 [false,false,true,false], 
 [true,true,false,true]]

 [[0,2,2,1], 
 [3,4,3,3], 
 [1,2,3,1]]

*/
function minesweeper(matrix) {
  let height = matrix.length,
    width = matrix[0].length;
  let board = [];
  for (let i = 0; i < height; i++) {
    let row = new Array(width).fill(0);
    board.push(row);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j]) {
        if (i + 1 < height) {
          board[i + 1][j]++;
        }
        if (i + 1 < height && j - 1 >= 0) {
          board[i + 1][j - 1]++;
        }
        if (j - 1 >= 0) {
          board[i][j - 1]++;
        }
        if (i - 1 >= 0 && j + 1 < width) {
          board[i - 1][j + 1]++;
        }
        if (i - 1 >= 0) {
          board[i - 1][j]++;
        }
        if (i - 1 >= 0 && j - 1 >= 0) {
          board[i - 1][j - 1]++;
        }
        if (j + 1 < width) {
          board[i][j + 1]++;
        }
        if (i + 1 < height && j + 1 < width) {
          board[i + 1][j + 1]++;
        }
      }
    }
  }
  return board;
}

// Solution - 2

function minesweeper(matrix) {
  return matrix.map((row, i) =>
    row.map((col, j) => {
      return countBombs(matrix, i, j);
    })
  );
}

function countBombs(array, x, y) {
  let count = 0;

  for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, array.length); i++)
    for (
      let j = Math.max(y - 1, 0);
      j < Math.min(y + 2, array[i].length);
      j++
    ) {
      if (i === x && j === y) continue;
      else if (array[i][j] === true) count++;
    }

  return count;
}
