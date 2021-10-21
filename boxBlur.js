/**
Input: 
[[1,1,1], 
 [1,7,1], 
 [1,1,1]]
Output: 
[[1]]

Input:
[[36,0,18,9,9,45,27], 
 [27,0,54,9,0,63,90], 
 [81,63,72,45,18,27,0], 
 [0,0,9,81,27,18,45], 
 [45,45,27,27,90,81,72], 
 [45,18,9,0,9,18,45], 
 [27,81,36,63,63,72,81]]
Output: 
 [[39,30,26,25,31], 
 [34,37,35,32,32], 
 [38,41,44,46,42], 
 [22,24,31,39,45], 
 [37,34,36,47,59]]
 */

function boxBlur(image) {
  let height = image.length - 2;
  let width = image[0].length - 2;
  let sumHeight = [];
  for (let i = 1; i <= height; i++) {
    let sumWidth = [];
    for (let j = 1; j <= width; j++) {
      let total =
        image[i - 1][j - 1] +
        image[i - 1][j] +
        image[i - 1][j + 1] +
        image[i][j - 1] +
        image[i][j] +
        image[i][j + 1] +
        image[i + 1][j - 1] +
        image[i + 1][j] +
        image[i + 1][j + 1];

      sumWidth.push(Math.floor(total / 9));
    }
    sumHeight.push(sumWidth);
  }
  return sumHeight;
}

boxBlur = (I) => {
  //Slice off the border
  var B = I.slice(1, -1).map((e) => e.slice(1, -1));

  //Replace every element with the average
  // of its neighbors
  return B.map((row, i) =>
    row.map((elem, j) => {
      var sum = 0;
      for (var x = 0; x < 3; ++x)
        for (var y = 0; y < 3; ++y) sum += I[i + x][j + y];
      return (sum / 9) | 0;
    })
  );
};
