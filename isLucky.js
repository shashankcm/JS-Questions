function isLucky(n) {
  let numArr = ("" + n).split(""),
    n1 = numArr.splice(0, numArr.length / 2),
    n2 = numArr.splice(numArr.length / 2 - 1, numArr.length);

  function sumOfArr(arr) {
    return arr.reduce((curr, prev) => parseInt(curr) + parseInt(prev), 0);
  }
  let sumN1 = sumOfArr(n1),
    sumN2 = sumOfArr(n2);
  if (sumN1 === sumN2) {
    return true;
  } else {
    return false;
  }
}
