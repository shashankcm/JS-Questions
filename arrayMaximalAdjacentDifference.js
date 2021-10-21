function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let tempDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (tempDiff > maxDiff) {
      maxDiff = tempDiff;
    }
  }
  return maxDiff;
}

function arrayMaximalAdjacentDifference(arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
}
