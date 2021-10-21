function commonCharacterCount(s1, s2) {
  let s1Sort = s1.split("").sort(),
    s2Sort = s2.split("").sort(),
    count = 0,
    common = new Map();

  for (let char of s1Sort) {
    common.has(char)
      ? common.set(char, common.get(char) + 1)
      : common.set(char, 1);
  }

  for (let char of s2Sort) {
    if (common.has(char) && common.get(char) > 0) {
      common.set(char, common.get(char) - 1);
      count += 1;
    }
  }

  return count;
}
