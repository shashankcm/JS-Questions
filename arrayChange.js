function arrayChange(inputArray) {
  let numofMoves = 0;
  for (let i = 0; i < inputArray.length; i++) {
    while (inputArray[i + 1] <= inputArray[i]) {
      inputArray[i + 1]++;
      numofMoves++;
    }
  }
  return numofMoves;
}
