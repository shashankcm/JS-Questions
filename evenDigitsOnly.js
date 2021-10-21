function evenDigitsOnly(n) {
  return ("" + n).split("").every((num) => num % 2 === 0);
}

/*
Input:n: 642386

Expected Output: false

Input n: 248622
output: true
*/

function evenDigitsOnly(n) {
  return (n + "").split("").every((x) => x % 2 === 0);
}

function evenDigitsOnly(n) {
  return !(n + "").match(/[13579]/);
}
