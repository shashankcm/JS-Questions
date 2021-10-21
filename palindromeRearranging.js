function palindromeRearranging(inputString) {
  let chars = new Array(26).fill(0);
  for (let i = 0; i < inputString.length; i++) {
    chars[inputString.charCodeAt(i) - 97]++;
  }
  return (
    inputString.length % 2 ===
    chars
      .map((char) => (char % 2 === 1 ? 1 : 0))
      .reduce((prev, curr) => prev + curr)
  );
}

function palindromeRearranging(s) {
  return (
    [...new Set(s)]
      .map((i) => s.split("").filter((j) => j == i).length % 2)
      .reduce((x, y) => x + y) <= 1
  );
}
