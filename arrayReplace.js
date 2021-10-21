/**
inputArray: [1, 2, 1]
elemToReplace: 1
substitutionElem: 3

[3, 2, 3]
 */
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((ele, index) =>
    ele === elemToReplace ? substitutionElem : ele
  );
}
