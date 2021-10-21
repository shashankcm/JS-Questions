function alternatingSums(a) {
  let arr1 = 0,
    arr2 = 0,
    finalArr = [];

  a.filter((ele, index) =>
    index % 2 === 0 ? (arr1 += a[index]) : (arr2 += a[index])
  );

  finalArr.push(arr1);
  finalArr.push(arr2);

  return finalArr;
}
