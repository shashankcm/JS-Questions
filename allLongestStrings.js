function allLongestStrings(inputArray) {
  let highestStringLength = 0,
    finalArr = [];

  highestStringLength = inputArray.reduce((prev, curr) => {
    return curr.length > prev ? (prev = curr.length) : prev;
  }, 0);

  finalArr = inputArray.filter((word) => word.length >= highestStringLength);

  return finalArr;
}
// allLongestStrings(["onsfnib", "aokbcwthc", "jrfcw"])
