function avoidObstacles(inputArray) {
  function innerAvoidObstacles(inputArray, k = 2) {
    return inputArray.every((ele) => ele % k)
      ? k
      : innerAvoidObstacles(inputArray, k + 1);
  }
  return innerAvoidObstacles(inputArray);
}
