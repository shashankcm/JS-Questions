function reduceTheArray(numbers, size) {
  let tempArr = splitedArr(numbers, size);
  tempArr = sumArr(tempArr).join("");

  while (tempArr.length > 2) {
    tempArr = splitedArr(tempArr, size);
    tempArr = sumArr(tempArr).join("");
  }

  return tempArr;
}

function sumArr(tempArr) {
  let arrTmep = tempArr.map(function (x) {
    let splitSingleArr = ("" + x).split("");
    return splitSingleArr.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    });
  });

  return arrTmep;
}

function splitedArr(arr, size) {
  return [].concat.apply(
    [],
    arr.split("").map(function (x, i) {
      return i % size ? [] : arr.slice(i, i + size);
    }, arr)
  );
}

console.log(reduceTheArray("1112345678989", 3));

/* number: 1112345678989 size = 3
=> 111 234 567 898 9
=> 3 9 18 25 9
=> 391 825 9
=> 131 59
=> 514
=> 10 */
