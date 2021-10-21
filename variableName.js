function variableName(name) {
  const regexp = /^(?=.{1,32}$)([a-zA-Z_][a-zA-Z0-9_]*)$/;
  return regexp.test(name);
}

function variableName(name) {
  let array = name.split("");
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && isDigit(array[i])) return false;
    if (!(isDigit(array[i]) || isLetter(array[i]) || isUnderscore(array[i])))
      return false;
  }
  return true;
}

function isDigit(c) {
  return "0123456789".indexOf(c) !== -1;
}

function isUnderscore(c) {
  return "_".indexOf(c) !== -1;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

/*
name: "var_1__Int"
Output: true

input name: "2w2" 
output: false
*/
